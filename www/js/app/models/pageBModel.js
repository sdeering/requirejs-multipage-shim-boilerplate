define(['./basicModel'], function (BasicModel) {
    console.log('page-b model loaded.');
    var model2 = new BasicModel('Page B Dynamic Title', '100%');
    return model2;
});
