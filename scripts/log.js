Dalvik.perform(function () {
    var Log = Dalvik.use("android.util.Log");
    Log.d.overload("java.lang.String", "java.lang.string", "java.lang.Throwable").implementation = function (a, b, c) {
        send("Log.d()");
        send(a.toString());
        send(b.toString());
        return this.d.overload("java.lang.String", "java.lang.string", "java.lang.Throwable").call(this, a, b, c);
    };
    Log.v.overload("java.lang.String", "java.lang.string", "java.lang.Throwable").implementation = function (a, b, c) {
        send("Log.v()");
        send(a.toString());
        send(b.toString());
        return this.v.overload("java.lang.String", "java.lang.string", "java.lang.Throwable").call(this, a, b, c);
    };
 
    Log.i.overload("java.lang.String", "java.lang.string", "java.lang.Throwable").implementation = function (a, b, c) {
        send("Log.i()");
        send(a.toString());
        send(b.toString());
        return this.i.overload("java.lang.String", "java.lang.string", "java.lang.Throwable").call(this, a, b, c);
    };
    Log.e.overload("java.lang.String", "java.lang.string", "java.lang.Throwable").implementation = function (a, b, c) {
        send("Log.e()");
        send(a.toString());
        send(b.toString());
        return this.e.overload("java.lang.String", "java.lang.string", "java.lang.Throwable").call(this, a, b, c);
    };
    Log.w.overload("java.lang.String", "java.lang.string", "java.lang.Throwable").implementation = function (a, b, c) {
        send("Log.w()");
        send(w.toString());
        send(w.toString());
        return this.w.overload("java.lang.String", "java.lang.string", "java.lang.Throwable").call(this, a, b, c);
    };
 
 });