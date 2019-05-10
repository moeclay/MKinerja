// inisialisasi program
document.addEventListener('init', function(event) {
  var page = event.target;
  
  // page target 1
  if (page.id === 'page1') {

      // menu reload diklik 
      page.querySelector('#daftar').onclick = function() {
        // load data api realrime admin
        var width = 0;
        var id = setInterval(frame, 10);
        var modal = document.getElementById("modalloading");
        function frame() {
          if (width == 500) {
            modal.hide();
            clearInterval(id);
          }else{
            // tampilkan loading
            modal.show()
            // hitung lebar
            if (width == 250) {
              try {
                $.getJSON('http://ddns.pandawa-mqzz.com:81/entry/api', function(data) {
                  // hide modal
                  modal.hide();
                  clearInterval(id);
                  
                  var data = data;
                  // build tag html
                  var infiniteList = document.getElementById('infinite-list');

                  infiniteList.delegate = {
                    createItemContent: function(i) {
                      // detail data
                      var detailData = `<small>
                      <table style='font-size: 9px;'>
                        <tr>
                          <td><b>INVOICE</b></td>
                          <td> : </td>
                          <td>`+data[i].invoice+`</td>
                        </tr>
                        <tr>
                          <td><b>RACK</b></td>
                          <td> : </td>
                          <td>`+data[i].rack+`</td>
                        </tr>
                        <tr>
                          <td><b>OPERATOR</b></td>
                          <td> : </td>
                          <td>`+data[i].operator+`</td>
                        </tr>
                        <tr>
                          <td><b>PRODUKSI</b></td>
                          <td> : </td>
                          <td>`+data[i].produksi+`</td>
                        </tr>
                        <tr>
                          <td><b>INPUT</b></td>
                          <td> : </td>
                          <td>`+data[i].input+`</td>
                        </tr>
                        <tr>
                          <td><b>PROGRESS</b></td>
                          <td> : </td>
                          <td>`+data[i].progress+`</td>
                        </tr>
                        <tr>
                          <td><b>AMBIL</b></td>
                          <td> : </td>
                          <td>`+data[i].ambil+`</td>
                        </tr>
                        <tr>
                          <td><b>TIME PROGRESS</b></td>
                          <td> : </td>
                          <td>`+data[i].time_progress+`</td>
                        </tr>
                        <tr>
                          <td><b>CONSUMER TIME</b></td>
                          <td> : </td>
                          <td>`+data[i].consumer_time+`</td>
                        </tr>
                        <tr>
                          <td><b>ALL TIME</b></td>
                          <td> : </td>
                          <td>`+data[i].all_time+`</td>
                        </tr>
                      </table></small>`;

                      // daftar orderan
                      var dataList = '<ons-list-item tappable modifier="longdivider chevron nodivider">'+
                      '<div class="left">'+
                      '<img src="images/orderan.png">'+
                      '</div>'+
                      '<div class="center" onclick="ons.notification.alert(`'+detailData+'`);">'+
                      '<span class="list-item__title"><small>'+data[i].invoice+'</small> - <span style="background-color: #eee; padding: 4px; border-radius: 5px; font-weight: bold;"><small>'+"Sudah Diambil".toLowerCase()+'<small></span></span>'+
                      '<span class="list-item__subtitle"><small>'+data[i].ambil+'</small></span>'+
                      '</div>'+
                      '</ons-list-item>';
                      return ons.createElement(dataList);
                    },
                    countItems: function() {
                      return 25;
                    }
                  };

                  infiniteList.refresh();
                });
              }catch(err) {
                console.log('data tidak ditemukan');
              }  
            }
            width++;
          }
        }
      }

      // menu cari diklik
      page.querySelector('#cari').onclick = function() {
        document.querySelector('#myNavigator').pushPage('page2.html');
      }

      page.querySelector('#mesin').onclick = function() {
        // loader javascript 
        var width = 0;
        var id = setInterval(frame, 10);
        var modal = document.getElementById("modalloading");
        function frame() {
          if (width == 500) {
            modal.hide();
            clearInterval(id);
          } else {
            // tampilkan loading
            modal.show()
            // hitung lebar
            if (width == 250) {
              // load API
              try {
                $.getJSON('http://ddns.pandawa-mqzz.com:81/laporanhc/api', function(data) {
                  if (data.length) {
                    document.querySelector('#myNavigator').pushPage('page3.html',{data: data});
                    modal.hide();
                    clearInterval(id);
                  }
                });
              }catch(err) {
                modal.hide();
                clearInterval(id);
              }
              
            }
            width++;
          }
        }
      }

      page.querySelector('#mitra').onclick = function() {
        // loader javascript 
        var width = 0;
        var id = setInterval(frame, 10);
        var modal = document.getElementById("modalloading");
        function frame() {
          if (width == 500) {
            modal.hide();
            clearInterval(id);
          } else {
            // tampilkan loading
            modal.show()
            // hitung lebar
            if (width == 250) {
              // load API
              try {
                $.getJSON('http://ddns.pandawa-mqzz.com:81/laporanhc/api/home/mitra', function(data) {
                  if (data.length) {
                    document.querySelector('#myNavigator').pushPage('page4.html',{data: data});
                    modal.hide();
                    clearInterval(id);
                  }
                });
              }catch(err) {
                modal.hide();
                clearInterval(id);
              }
              
            }
            width++;
          }
        }
      }

      // default fungsi
      var width = 0;
      var id = setInterval(frame, 10);
      var modal = document.getElementById("modalloading");
      function frame() {
        if (width == 500) {
          modal.hide();
          clearInterval(id);
        }else{
          // tampilkan loading
          modal.show()
          // hitung lebar
          if (width == 250) {
            try {
              $.getJSON('http://ddns.pandawa-mqzz.com:81/entry/api', function(data) {
                // hide modal
                modal.hide();
                clearInterval(id);
                
                var data = data;
                // build tag html
                var infiniteList = document.getElementById('infinite-list');
                infiniteList.delegate = {
                  createItemContent: function(i) {
                    // detail data
                    var detailData = `<small>
                    <table style='font-size: 9px;'>
                      <tr>
                        <td><b>INVOICE</b></td>
                        <td> : </td>
                        <td>`+data[i].invoice+`</td>
                      </tr>
                      <tr>
                        <td><b>RACK</b></td>
                        <td> : </td>
                        <td>`+data[i].rack+`</td>
                      </tr>
                      <tr>
                        <td><b>OPERATOR</b></td>
                        <td> : </td>
                        <td>`+data[i].operator+`</td>
                      </tr>
                      <tr>
                        <td><b>PRODUKSI</b></td>
                        <td> : </td>
                        <td>`+data[i].produksi+`</td>
                      </tr>
                      <tr>
                        <td><b>INPUT</b></td>
                        <td> : </td>
                        <td>`+data[i].input+`</td>
                      </tr>
                      <tr>
                        <td><b>PROGRESS</b></td>
                        <td> : </td>
                        <td>`+data[i].progress+`</td>
                      </tr>
                      <tr>
                        <td><b>AMBIL</b></td>
                        <td> : </td>
                        <td>`+data[i].ambil+`</td>
                      </tr>
                      <tr>
                        <td><b>TIME PROGRESS</b></td>
                        <td> : </td>
                        <td>`+data[i].time_progress+`</td>
                      </tr>
                      <tr>
                        <td><b>CONSUMER TIME</b></td>
                        <td> : </td>
                        <td>`+data[i].consumer_time+`</td>
                      </tr>
                      <tr>
                        <td><b>ALL TIME</b></td>
                        <td> : </td>
                        <td>`+data[i].all_time+`</td>
                      </tr>
                    </table></small>`;

                    // daftar list 
                    var dataList = '<ons-list-item tappable modifier="longdivider chevron nodivider">'+
                    '<div class="left">'+
                    '<img src="images/orderan.png">'+
                    '</div>'+
                    '<div class="center" onclick="ons.notification.alert(`'+detailData+'`);">'+
                    '<span class="list-item__title"><small>'+data[i].invoice+'</small> - <span style="background-color: #eee; padding: 4px; border-radius: 5px; font-weight: bold;"><small>'+"Sudah Diambil".toLowerCase()+'<small></span></span>'+
                    '<span class="list-item__subtitle"><small>'+data[i].ambil+'</small></span>'+
                    '</div>'+
                    '</ons-list-item>';
                    return ons.createElement(dataList);
                  },
                  countItems: function() {
                    return 25;
                  }
                };

                infiniteList.refresh();
              });
            }catch(err) {
              console.log('data tidak ditemukan');
            }  
          }
          width++;
        }
      }
  }

  // page target 2
  if(page.id == 'page3'){
    // build tag html
    var infiniteList2 = document.getElementById('infinite-listmesin');

    infiniteList2.delegate = {
      createItemContent: function(i) {
        // detail data
        var detailData2 = `<small>
        <table style='font-size: 9px;'>
          <tr>
            <td><b>TANGGAL</b></td>
            <td> : </td>
            <td>`+page.data[i].tgl+`</td>
          </tr>
          <tr>
            <td><b>SHIFT</b></td>
            <td> : </td>
            <td>`+page.data[i].shift+`</td>
          </tr>
          <tr>
            <td><b>HC</b></td>
            <td> : </td>
            <td>`+page.data[i].hc+`</td>
          </tr>
          <tr>
            <td><b>SPK DITUNGGU</b></td>
            <td> : </td>
            <td>`+page.data[i].spk_ditunggu+`</td>
          </tr>
          <tr>
            <td><b>SPK TOTAL</b></td>
            <td> : </td>
            <td>`+page.data[i].total_spk+`</td>
          </tr>
          <tr>
            <td><b>TUNAI</b></td>
            <td> : </td>
            <td>`+page.data[i].tunai+`</td>
          </tr>
          <tr>
            <td><b>NET</b></td>
            <td> : </td>
            <td>`+page.data[i].net+`</td>
          </tr>
        </table></small>`;
        
        // daftar orderan
        var dataList = '<ons-list-item tappable modifier="longdivider chevron nodivider">'+
          '<div class="left">'+
          '<img src="images/orderan.png">'+
          '</div>'+
          '<div class="center" onclick="ons.notification.alert(`'+detailData2+'`);">'+
          '<span class="list-item__title"><small>'+page.data[i].hc+'</small> - <span style="background-color: #eee; padding: 4px; border-radius: 5px; font-weight: bold;"><small>'+page.data[i].shift+'<small></span></span>'+
          '<span class="list-item__subtitle"><small>'+page.data[i].tgl+'</small></span>'+
          '</div>'+
          '</ons-list-item>';
        return ons.createElement(dataList);
      },
      countItems: function() {
        return 9;
      }
    };
    infiniteList2.refresh();   
  }

  if(page.id == 'page4'){
    // build tag html
    var infiniteList2 = document.getElementById('infinite-listmitra');

    infiniteList2.delegate = {
      createItemContent: function(i) {
        // detail data
        var detailData3 = `<small>
        <table style='font-size: 9px;'>
          <tr>
            <td><b>TANGGAL</b></td>
            <td> : </td>
            <td>`+page.data[i].tgl+`</td>
          </tr>
          <tr>
            <td><b>HC</b></td>
            <td> : </td>
            <td>`+page.data[i].hc+`</td>
          </tr>
          <tr>
            <td><b>SPK DITUNGGU</b></td>
            <td> : </td>
            <td>`+page.data[i].spk_ditunggu+`</td>
          </tr>
          <tr>
            <td><b>SPK TOTAL</b></td>
            <td> : </td>
            <td>`+page.data[i].total_spk+`</td>
          </tr>
          <tr>
            <td><b>TUNAI</b></td>
            <td> : </td>
            <td>`+page.data[i].tunai+`</td>
          </tr>
          <tr>
            <td><b>NET</b></td>
            <td> : </td>
            <td>`+page.data[i].net+`</td>
          </tr>
        </table></small>`;
        
        // daftar orderan
        var dataList = '<ons-list-item tappable modifier="longdivider chevron nodivider">'+
          '<div class="left">'+
          '<img src="images/orderan.png">'+
          '</div>'+
          '<div class="center" onclick="ons.notification.alert(`'+detailData3+'`);">'+
          '<span class="list-item__title"><small>'+page.data[i].hc+'</small> - <span style="background-color: #eee; padding: 4px; border-radius: 5px; font-weight: bold;"><small>mitra<small></span></span>'+
          '<span class="list-item__subtitle"><small>'+page.data[i].tgl+'</small></span>'+
          '</div>'+
          '</ons-list-item>';
        return ons.createElement(dataList);
      },
      countItems: function() {
        return 7;
      }
    };
    infiniteList2.refresh();
  }

});

function senddata() {
  var a = document.getElementById("no_invoice").value;
  var dialog = document.getElementById('error-invoice');
  if (a == null || a == "") {
    if (dialog) {
      dialog.show();
    } else {
      ons.createElement('dialog.html', { append: true })
        .then(function(dialog) {
          dialog.show();
        });
    }

  // if data isset
  }else{
    // variable form
    var i = document.getElementById("no_invoice").value;
    // loader javascript 
    var width = 0;
    var id = setInterval(frame, 10);
    var modal = document.getElementById("modalloading");
    function frame() {
      if (width == 500) {
        modal.hide();
        clearInterval(id);
      } else {
        // tampilkan loading
        modal.show()
        // hitung lebar
        if (width == 250) {
          // load API
          $.getJSON('http://ddns.pandawa-mqzz.com:81/entry/realtime/apiscr/'+i, function(data) {
            if (data.length) {
                var tanggal = data[0].tanggal_input;
                var invoice = data[0].no_invoice;
                var status  = data[0].faktur_status;
                var hasil = `<table>
                  <tr>
                    <td><small>TANGGAL ORDER</small></td>
                    <td><small>:</small></td>
                    <td id="datatanggal"><small>`+tanggal+`</small></td>
                  </tr>
                  <tr>
                    <td><small>NO INVOICE</small></td>
                    <td><small>:</small></td>
                    <td id="datainvoice"><small>`+invoice+`</small></td>
                  </tr>
                  <tr>
                    <td><small>STATUS</small></td>
                    <td><small>:</small></td>
                    <td id="datastatus"><small>`+status+`</small></td>
                  </tr>
                </table>`;
      
                var options = {};
                options.title = "Info Detail : ";
                ons.notification.alert(hasil, options);
                // hide notif
                modal.hide();
                clearInterval(id);
            } else {
              var kosong = document.getElementById('kosong-invoice');
              if (kosong) {
                kosong.show();
                modal.hide();
                clearInterval(id);
              } else {
                ons.createElement('kosong.html', { append: true }).then(function(kosong) {
                  kosong.show();
                  modal.hide();
                clearInterval(id);
                });
              }
            }
          });
        }
        width++;
      }
    }
  }
}

var hideDialog = function(id) {
  document.getElementById(id).hide();
};