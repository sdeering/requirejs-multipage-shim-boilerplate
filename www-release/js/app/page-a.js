define("app/models/pageAModel",["./basicModel"],function(e){console.log("page-a model loaded.");var t=new e("Page A Dynamic Title","50%");return t}),define("app/page-a",["jquery","app/models/pageAModel","bootstrap"],function(e,t){e(function(){e("h1").html(t.getTitle());var n=t.getPercentComplete();e(".progress-bar").css({width:n}).attr("aria-valuenow",n.substr(0,n.length-1)),e("[rel=popover]").popover({trigger:"hover"}),e(".loud").tooltip({title:"Hello A!"})})});