const { threadsData } = global.db;

function isPostMethod(req) {
	return req.method == "POST";
}

module.exports = function (checkAuthConfigDashboardOfThread) {
	return {
		isAuthenticated(req, res, next) {
			if (req.isAuthenticated())
				return next();

			if (isPostMethod(req))
				return res.status(401).send({
					status: "error",
					error: "PERMISSION_DENIED",
					message: "You are not logged in yet"
				});

			req.flash("errors", { msg: "You must be logged in" });
			res.redirect(`/login?redirect=${req.originalUrl}`);
		},

		unAuthenticated(req, res, next) {
			if (!req.isAuthenticated())
				return next();

			if (isPostMethod(req))
				return res.status(401).send({
					status: "error",
					error: "PERMISSION_DENIED",
					message: "An error has occurred"
				});

			res.redirect("/");
		},

		isVeryfiUserIDFacebook(req, res, next) {
			if (req.user.facebookUserID)
				return next();

			if (isPostMethod(req))
				return res.status(401).send({
					status: "error",
					error: "PERMISSION_DENIED",
					message: "You have not verified your Facebook id"
				});

			req.flash("errors", { msg: "You need to authenticate your facebook id before performing this action" });
			res.redirect(`/verifyfbid?redirect=${req.originalUrl}`);
		},

		isWaitVerifyAccount(req, res, next) {
			if (req.session.waitVerifyAccount)
				return next();

			if (isPostMethod(req))
				return res.status(401).send({
					status: "error",
					error: "PERMISSION_DENIED",
					message: "An error occurred, please try again"
				});

			res.redirect("/register");
		},

		async checkHasAndInThread(req, res, next) {
			const userID = req.user.facebookUserID;
			const threadID = isPostMethod(req) ? req.body.threadID : req.params.threadID;
			const threadData = await threadsData.get(threadID);

			if (!threadData) {
				if (isPostMethod(req))
					return res.status(401).send({
						status: "error",
						error: "PERMISSION_DENIED",
						message: "This group was not found"
					});

				req.flash("errors", { msg: "Thread not found" });
				return res.redirect("/dashboard");
			}

			const findMember = threadData.members.find(m => m.userID == userID && m.inGroup == true);
			if (!findMember) {
				if (isPostMethod(req))
					return res.status(401).send({
						status: "error",
						error: "PERMISSION_DENIED",
						message: "You are not a member of this group"
					});

				req.flash("errors", { msg: "You are not in this chat group" });
				return res.redirect("/dashboard");
			}
			req.threadData = threadData;
			next();
		},

		async middlewareCheckAuthConfigDashboardOfThread(req, res, next) {
			const threadID = isPostMethod(req) ? req.body.threadID : req.params.threadID;
			if (checkAuthConfigDashboardOfThread(threadID, req.user.facebookUserID))
				return next();

			if (isPostMethod(req))
				return res.status(401).send({
					status: "error",
					error: "PERMISSION_DENIED",
					message: "You do not have permission to edit this group"
				});

			req.flash("errors", {
				msg: "[!] Only chat group admins or authorized members can edit the dashboard"
			});
			return res.redirect("/dashboard");
		},

		async isAdmin(req, res, next) {
			const userID = req.user.facebookUserID;
			if (!global.GoatBot.config.adminBot.includes(userID)) {
				if (isPostMethod(req))
					return res.status(401).send({
						status: "error",
						error: "PERMISSION_DENIED",
						message: "You are not an admin of the bot ADMIN : AKASH HASAN"
					});

				req.flash("errors", { msg: "You are not an admin of the bot ADMIN : AKASH HASAN" });
				return res.redirect("/dashboard");
			}
			next();
		}
	};
};
