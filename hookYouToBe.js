// com.google.android.youtube/.UrlActivity
Java.perform(function () {
    var UrlActivity = Java.use("com.google.android.youtube.app.UrlActivity")
    UrlActivity.onResume.overload().implementation = function(){
        // console.log(this.testTextView.value.getText())
        // // this.testTextView.value.setText.overload('java.lang.CharSequence').implementation = function(text){
        // //     return 'fdasfasfdasdfasdf';
        // // }
        // var JavaString = Java.use('java.lang.String');
        // var exampleString1 = JavaString.$new('Hello World, this is an example string in Java.');
        // this.testTextView.value.setText(exampleString1);
        return this.onResume();
    }
})