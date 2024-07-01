(function() {
    window.Distiller || (window.Distiller = {})
}
).call(this),
function() {
    new (function() {
        function e() {
            var e;
            $.ajaxPrefilter((e = this,
            function(i) {
                var t;
                if (t = i.url.indexOf("distiller.com") > -1,
                !i.crossDomain || t)
                    return e._tokenize(i),
                    e._configureHost(i)
            }
            ))
        }
        return e.prototype._tokenize = function(e) {
            return this._addToBeforeSend(e, function(e) {
                if (e.setRequestHeader("X-DISTILLER-DEVELOPER-TOKEN", Distiller.distillerApiKey),
                $.cookie("X_USER_TOKEN"))
                    return e.setRequestHeader("X-USER-TOKEN", $.cookie("X_USER_TOKEN"))
            })
        }
        ,
        e.prototype._configureHost = function(e) {
            var i, t;
            if ("/api/" === e.url.substr(0, 5) && Distiller.distillerApiHost && (t = e.url.substr(5),
            "/" !== (i = Distiller.distillerApiHost)[i.length - 1] && (i += "/"),
            e.url = i + t,
            e.crossDomain = !0),
            Distiller.distillerAzureKey)
                return this._addToBeforeSend(e, function(e) {
                    return e.setRequestHeader("Ocp-Apim-Subscription-Key", Distiller.distillerAzureKey)
                })
        }
        ,
        e.prototype._addToBeforeSend = function(e, i) {
            var t;
            return t = e.beforeSend,
            e.beforeSend = function(e, r) {
                return t && t(e, r),
                i(e, r)
            }
        }
        ,
        e
    }())
}
.call(this),
function() {}
.call(this);
