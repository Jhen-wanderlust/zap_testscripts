// Payroll 


var x = document.querySelectorAll(".mendiv ul li a");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].getAttribute('onclick')
var me = cleanlink.replace("load_page('", ' ').trim();
var me1 = me.replace( /\d+/g, '');
var me2 = me1.replace("','')", "");

myarray.push([cleantext, 'http://192.168.2.47/online_test/web_standard_onedb/webapp/payroll/'+ me2 ]);
};
function make_table() {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()

//just scratch below:

localStorage.setItem('data7', 0)

//separate

//3 and 3 times
var data = [
  0,
  1,
  2
]
var counter = localStorage.getItem('data7')
document.querySelectorAll(".mendiv ul li a")[counter].click();

counter++
localStorage.setItem('data7', counter)


//separate

  save = window.location.href;
  save = save;
  localStorage.setItem('save',save)

  console.log(save);
//fire
  localStorage.getItem("save"); 

  
localStorage.setItem('data7', 0)

//separate

//6  times
var data = [
  0,
  1,
  2,
  3,
  4,
  5
]
var counter = localStorage.getItem('data7')
document.querySelectorAll(".cbo_paygroup.input_change")[counter].checked = true;

counter++
localStorage.setItem('data7', counter)


//run for retesting 
var x = document.querySelectorAll(".cbo_paygroup");
var myarray = []
for (var i=0; i<x.length; i++){
var cleanlink = x[i].id;
myarray.push([ "ID: " + cleanlink +"---------->" +'Bug:ID should not be separated by a hyphen or spaces']);
};
function make_table() {
    var table = '<table><thead><th> Checkboxs ID : http://192.168.2.47/online_test/web_standard_onedb/webapp/payroll/atm_view_chinabnk.php </th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+myarray[i][0]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()



  
localStorage.setItem('data7', 0)
//tkm
var my = [
"0",
"1",
"2",
"3",
"4"
]
var counter = localStorage.getItem('data7')

var x = document.querySelectorAll("#ui-accordion-sidemenu-panel-"+counter +" > table > tbody > tr");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].innerHTML;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].getAttribute('onclick')
var me = cleanlink.replace("window.open('", ' ').trim();
var me0 = me.replace("_self",'').trim();
var me1 = me0.replace( /\d+/g, '').trim();
var me2 = me1.replace("','')", '').trim();
var me3 = me2.replace(/\s+/g, ' ').trim();
var me4 = me3.replace(";", '').trim();
myarray.push([cleantext, 'http://192.168.2.47/online_test/web_standard_onedb/webapp/tkm/'+ me4 ]);
};
function make_table() {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()

counter++
localStorage.setItem('data7', counter)


// HRIS


var x = document.querySelectorAll(".mendiv ul li a");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].getAttribute('onclick')
var me = cleanlink.replace("load_page('", ' ').trim();
var me1 = me.replace( /\d+/g, '');
var me2 = me1.replace("','','", "");
var me3 = me2.replace(cleantext, "");
var me4 = me3.replace("','')","");
myarray.push([cleantext, 'http://192.168.2.47/online_test/web_standard_onedb//webapp/hris/'+ me4 ]);
};
function make_table() {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()




// ESS User side 


var x = document.querySelectorAll('.sidebar_con h3');
var myarray = []
for (var i=0; i<x.length; i++){
var modid = x[i].id;
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].getAttribute('onclick')
var me = cleanlink.replace("load_page('", ' ').trim();
var me1 = me.replace( /\d+/g, '');
var me2 = me1.replace("','','", "");
var me3 = me2.replace(cleantext, "");
var me4 = me3.replace("','')","");
var me5 = me4.replace(modid,'')
myarray.push([cleantext, 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/'+ me5 ]);
};
function make_table() {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()



var x = document.querySelectorAll(".mendiv ul li a");
var myarray = []
for (var i=0; i<x.length; i++){
var modid = x[i].id;
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].getAttribute('onclick')
var me = cleanlink.replace("load_page('", ' ').trim();
var me1 = me.replace( /\d+/g, '');
var me2 = me1.replace("','','", "");
var me3 = me2.replace(cleantext, "");
var me4 = me3.replace("','')","");
var me5 = me4.replace(modid,'')
myarray.push([cleantext, 'http://192.168.2.47/online_test/web_standard_onedb//ess/main/'+ me5 ]);
};
function make_table() {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()



//tracc




var x = document.querySelectorAll(".mendiv ul li a");
var myarray = []
for (var i=0; i<x.length; i++){
var modid = x[i].id;
var newid = modid.replace('a_submenu_','');
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].getAttribute('onclick')
var me = cleanlink.replace("load_page('", ' ').trim();
var me1 = me.replace( /\d+/g, '');
var me2 = me1.replace("','','", "");
var me3 = me2.replace(cleantext, "");
var me4 = me3.replace("','')","");
var me5 = me4.replace(newid,'')

myarray.push([cleantext, 'http://192.168.2.47/online_test/acc_onedb/webapp/acc/main/'+ me5 ]);
};
function make_table() {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()



// FIXED ASSET


var x = document.querySelectorAll(".mendiv ul li a");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].getAttribute('onclick')
var me = cleanlink.replace("load_page('", ' ').trim();
var me1 = me.replace( /\d+/g, '');
var me2 = me1.replace("','','", "");
var me3 = me2.replace(cleantext, "");
var me4 = me3.replace("','')","");
myarray.push([cleantext, 'http://192.168.2.47/online_test/acc_onedb/webapp/fa/fixedasset/'+ me4 ]);
};
function make_table() {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()