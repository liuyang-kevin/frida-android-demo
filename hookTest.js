
Java.perform(function () {
    var mainClass = Java.use("me.shingle.fridatest.MainActivity")
    mainClass.onResume.overload().implementation = function(){
        // console.log(this.testTextView.value.getText())
        // // this.testTextView.value.setText.overload('java.lang.CharSequence').implementation = function(text){
        // //     return 'fdasfasfdasdfasdf';
        // // }
        // var JavaString = Java.use('java.lang.String');
        // var exampleString1 = JavaString.$new('Hello World, this is an example string in Java.');
        // this.testTextView.value.setText(exampleString1);
        return this.onResume();
    }

    // mainClass.Add.implementation = function (a1, a2) {
    //     console.log("a1:" + a1)
    //     console.log("a2:" + a2)

    //     var result = this.Add(a1, a2)

    //     console.log("result:" + result)
        

    //     return 100
    // }


    // console.log(mainClass.testTextView.text);
    // mainClass.testTextView.value.setText('sdfskdfjslkjdfklsj')
})


// Resources 类hook
Java.perform(function() {
    var Resources = Java.use('android.content.res.Resources'); // 获取Resources类
    // 因为getString方法重载，有几个我也没数，我只知道我需要用到的是接收一个id作为参数的方法
    //.overload填上你要hook的方法的参数类型，如果不知道直接不写，frida会报错提示你
    Resources['getString'].overload('int').implementation = function(id) { // id是接收到的参数
        console.log('\n----- [Resources.getString] -----');
        var str = this.getText(id); // 这里通过this调用了Resources类中的getText方法
        console.log('resId:{0} => string:{1}'.format(id,str)); // 输出
        return str // 返回
    }
});


// Toast 类hook，和上面一样
Java.perform(function() {
    var Toast = Java.use('android.widget.Toast');
    Toast['makeText'].overload('android.content.Context', 'java.lang.CharSequence', 'int').implementation = function(context, text, duration) { // 三个参数
        console.log('\n----- [Toast.makeText] -----');
        console.log('[Context]');
        console.log('\n\tContext:', context);
        console.log('\n\tClass:', context.getClass());
        var clazz = String(context.getClass()).split('.');
        console.log('\n\t\tClass Package:', clazz[0]);
        console.log('\n\t\tClass Name:', clazz[1]);
        console.log('Text:', text);
        console.log('Duration:', duration);
        return this.makeText(context, null, text, duration);
    }
});
