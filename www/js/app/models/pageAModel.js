define(['./basicModel'], function (BasicModel) {
    console.log('page-a model loaded.');
    var model1 = new BasicModel('Page A Dynamic Title', '50%');
    return model1;
});
