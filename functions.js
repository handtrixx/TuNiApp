function timestamp(type) {
   var today = new Date();
   if ((today.getMonth() + 1).length > 1) {
      var month = (today.getMonth() + 1).slice(-2);
   } else {
      var month = ("0" + (today.getMonth() + 1)).slice(-2);
   }
   if ((today.getDate()).length > 1) {
      var day = today.getDate().slice(-2);
   } else {
      var day = ("0" + today.getDate()).slice(-2);
   }
   if (today.getHours().length > 1) {
      var hours = today.getHours().slice(-2);
   } else {
      var hours = ("0" + today.getHours()).slice(-2);
   }
   if (today.getMinutes().length > 1) {
      var minutes = today.getMinutes().slice(-2);
   } else {
      var minutes = ("0" + today.getMinutes()).slice(-2);
   }
   if (today.getSeconds().length > 1) {
      var seconds = today.getSeconds().slice(-2);
   } else {
      var seconds = ("0" + today.getSeconds()).slice(-2);
   }
   var date = today.getFullYear() + '-' + month + '-' + day;
   var time = hours + ":" + minutes;
   var timestamp = date + "T" + time + ":" + seconds;
   if (type == "date") {
      return date;
   } else
      if (type == "time") {
         return time
      } else
         if (type == "timestamp") {
            return timestamp;
         } else {
            return timestamp;
         }
}
function goTo(where) {
   if (where != "main") {
      document.getElementById("main").style.display = "none";
   } else {
      document.getElementById("main").style.display = "block";
      updateKasselcam();
   }
   if (where == "calendar") {
      document.getElementById("calendar").style.display = "block";
   } else {
      document.getElementById("calendar").style.display = "none";
   }
   if (where == "tvremote") {
      document.getElementById("tvremote").style.display = "block";
   } else {
      document.getElementById("tvremote").style.display = "none";
   }
   if (where == "sensors") {
      document.getElementById("sensors").style.display = "block";
      var container = document.querySelector('#masonrySensors');
      var msnry = Masonry.data(container);
      msnry.layout();
   } else {
      document.getElementById("sensors").style.display = "none";
   }
   if (where == "devicestatus") {
      document.getElementById("devicestatus").style.display = "block";
      var container = document.querySelector('#masonryDevices');
      var msnry = Masonry.data(container);
      msnry.layout();
   } else {
      document.getElementById("devicestatus").style.display = "none";
   }
   if (where == "webmon") {
      document.getElementById("webmon").style.display = "block";
   } else {
      document.getElementById("webmon").style.display = "none";
   }
   if (where == "arbeitszimmer") {
      document.getElementById("arbeitszimmer").style.display = "block";
      var container = document.querySelector('#masonryArbeitszimmer');
      var msnry = Masonry.data(container);
      msnry.layout();
   } else {
      document.getElementById("arbeitszimmer").style.display = "none";
   }
   if (where == "balkon") {
      document.getElementById("balkon").style.display = "block";
   } else {
      document.getElementById("balkon").style.display = "none";
   }
   if (where == "flur") {
      document.getElementById("flur").style.display = "block";
   } else {
      document.getElementById("flur").style.display = "none";
   }
   if (where == "schlafzimmer") {
      document.getElementById("schlafzimmer").style.display = "block";
   } else {
      document.getElementById("schlafzimmer").style.display = "none";
   }
   if (where == "wohnzimmer") {
      document.getElementById("wohnzimmer").style.display = "block";
      var container = document.querySelector('#masonryWohnzimmer');
      var msnry = Masonry.data(container);
      msnry.layout();
   } else {
      document.getElementById("wohnzimmer").style.display = "none";
   }
   if (where == "screensaver") {
      document.getElementById("screensaver").style.display = "block";
      document.getElementById("nav").style.display = "none";
      slideshow();
      idVar = setInterval(function () {
         slideshow();
      }, 19000);

   } else {
      document.getElementById("screensaver").style.display = "none";
      document.getElementById("nav").style.display = "block";
   }
}
function slideshow() {
   var random = (Math.floor(Math.random() * 10000));
   var date = timestamp("date");
   var time = timestamp("time");
   document.getElementById("screensaver").style.backgroundImage = "url('api/picture?" + random + "')";
   document.getElementById("screensaverDate").innerHTML = date;
   document.getElementById("screensaverTime").innerHTML = time;
}
function goInit() {
   document.getElementById("nav").style.display = "block";
   document.getElementById("main").style.display = "block";
   document.getElementById("calendar").style.display = "none";
   document.getElementById("devicestatus").style.display = "none";
   document.getElementById("sensors").style.display = "none";
   document.getElementById("tvremote").style.display = "none";
   document.getElementById("webmon").style.display = "none";
   document.getElementById("arbeitszimmer").style.display = "none";
   document.getElementById("balkon").style.display = "none";
   document.getElementById("flur").style.display = "none";
   document.getElementById("schlafzimmer").style.display = "none";
   document.getElementById("wohnzimmer").style.display = "none";
   document.getElementById("screensaver").style.display = "none";
   document.getElementById("loading").classList.remove("d-flex");
   document.getElementById("loading").classList.add("d-none");
}
function fullscreen() {
   var element = document.documentElement;
   if (event instanceof HTMLElement) {
      element = event;
   }
   var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;
   element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () { return false; };
   document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () { return false; };
   isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
}
function refresh() {
   location.reload();
}
function xyToRgb(x, y, bri) {
   z = 1.0 - x - y;
   Y = bri / 255.0;
   X = (Y / y) * x;
   Z = (Y / y) * z;
   r = X * 1.612 - Y * 0.203 - Z * 0.302;
   g = -X * 0.509 + Y * 1.412 + Z * 0.066;
   b = X * 0.026 - Y * 0.072 + Z * 0.962;
   r = r <= 0.0031308 ? 12.92 * r : (1.0 + 0.055) * Math.pow(r, (1.0 / 2.4)) - 0.055;
   g = g <= 0.0031308 ? 12.92 * g : (1.0 + 0.055) * Math.pow(g, (1.0 / 2.4)) - 0.055;
   b = b <= 0.0031308 ? 12.92 * b : (1.0 + 0.055) * Math.pow(b, (1.0 / 2.4)) - 0.055;
   maxValue = Math.max(r, g, b);
   r /= maxValue;
   g /= maxValue;
   b /= maxValue;
   r = r * 255;
   if (r < 0) { r = 255 }
   g = g * 255;
   if (g < 0) { g = 255 }
   b = b * 255;
   if (b < 0) { b = 255 }
   r = Math.round(r);
   g = Math.round(g);
   b = Math.round(b);
   value = "rgb(" + r + "," + g + "," + b + ")";
   var rgb = [];
   rgb[0] = r;
   rgb[1] = g;
   rgb[2] = b;
   return rgb;
}
function RGBToHex(r, g, b) {
   r = r.toString(16);
   g = g.toString(16);
   b = b.toString(16);

   if (r.length == 1)
      r = "0" + r;
   if (g.length == 1)
      g = "0" + g;
   if (b.length == 1)
      b = "0" + b;

   return "#" + r + g + b;
}
function hexToRGB(h) {
   let r = 0, g = 0, b = 0;

   // 3 digits
   if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];

      // 6 digits
   } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
   }
   var R = parseInt(r);
   var G = parseInt(g);
   var B = parseInt(b);
   var obj = {
      r: R,
      g: G,
      b: B
   };
   return obj;
}
function RGBToXy(value) {
   var input = value;
   var array = rgb_to_cie(input.r, input.g, input.b);
   function rgb_to_cie(red, green, blue) {
      //Apply a gamma correction to the RGB values, which makes the color more vivid and more the like the color displayed on the screen of your device
      red = (red > 0.04045) ? Math.pow((red + 0.055) / (1.0 + 0.055), 2.4) : (red / 12.92);
      green = (green > 0.04045) ? Math.pow((green + 0.055) / (1.0 + 0.055), 2.4) : (green / 12.92);
      blue = (blue > 0.04045) ? Math.pow((blue + 0.055) / (1.0 + 0.055), 2.4) : (blue / 12.92);

      //RGB values to XYZ using the Wide RGB D65 conversion formula
      var X = red * 0.664511 + green * 0.154324 + blue * 0.162028;
      var Y = red * 0.283881 + green * 0.668433 + blue * 0.047685;
      var Z = red * 0.000088 + green * 0.072310 + blue * 0.986039;

      //Calculate the xy values from the XYZ values
      var x = (X / (X + Y + Z)).toFixed(4);
      var y = (Y / (X + Y + Z)).toFixed(4);

      if (isNaN(x))
         x = 0;
      if (isNaN(y))
         y = 0;
      return [x, y];
   }
   var x = array[0];
   var y = array[1];
   array[0] = parseFloat(array[0]);
   array[1] = parseFloat(array[1]);

   return array;
}
function updateStatus(device) {
   let url = 'api/' + device;
   fetch(url).then(function (response) {
      return response.json();
   }).then(function (json) {
      var deviceStatus = json;
      refreshUi(device, deviceStatus);
   }).catch(function (error) {
      console.log("Fehler beim Abruf von " + device);
      console.log(error);
      var deviceStatus = {};
      deviceStatus.reachable = false;
      refreshUi(device, deviceStatus);
   });
}
function refreshUi(device, deviceStatus) {
   //console.log(device);
   //console.log(deviceStatus);
   if (device === "system") {
      if (deviceStatus.status === "ok") {
         document.getElementById('system_reachable').style.color = "#094609";
      }
      else {
         document.getElementById('system_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/arbeitszimmer") {
      if (deviceStatus.any_on === true) {
         document.getElementById('lights_arbeitszimmer_on').checked = true;
      } else {
         document.getElementById('lights_arbeitszimmer_on').checked = false;
      }
   }
   else if (device === "lights/arbeitszimmer/licht1") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_arbeitszimmer_licht1_reachable').style.color = "#094609";
         document.getElementById('status_arbeitszimmer_licht1_reachable').style.color = "#094609";
         document.getElementById('lights_arbeitszimmer_licht1_on').checked = deviceStatus.on;
         document.getElementById('lights_arbeitszimmer_licht1_bri').value = deviceStatus.bri;
      } else {
         document.getElementById('lights_arbeitszimmer_licht1_reachable').style.color = "#6f0f0f";
         document.getElementById('status_arbeitszimmer_licht1_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/arbeitszimmer/licht2") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_arbeitszimmer_licht2_reachable').style.color = "#094609";
         document.getElementById('status_arbeitszimmer_licht2_reachable').style.color = "#094609";
         document.getElementById('lights_arbeitszimmer_licht2_on').checked = deviceStatus.on;
         document.getElementById('lights_arbeitszimmer_licht2_bri').value = deviceStatus.bri;
      } else {
         document.getElementById('lights_arbeitszimmer_licht2_reachable').style.color = "#6f0f0f";
         document.getElementById('status_arbeitszimmer_licht2_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/arbeitszimmer/licht3") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_arbeitszimmer_licht3_reachable').style.color = "#094609";
         document.getElementById('status_arbeitszimmer_licht3_reachable').style.color = "#094609";
         document.getElementById('lights_arbeitszimmer_licht3_on').checked = deviceStatus.on;
         document.getElementById('lights_arbeitszimmer_licht3_bri').value = deviceStatus.bri;
      } else {
         document.getElementById('lights_arbeitszimmer_licht3_reachable').style.color = "#6f0f0f";
         document.getElementById('status_arbeitszimmer_licht3_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/arbeitszimmer/licht4") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_arbeitszimmer_licht4_reachable').style.color = "#094609";
         document.getElementById('status_arbeitszimmer_licht4_reachable').style.color = "#094609";
         document.getElementById('lights_arbeitszimmer_licht4_on').checked = deviceStatus.on;
         document.getElementById('lights_arbeitszimmer_licht4_bri').value = deviceStatus.bri;
      } else {
         document.getElementById('lights_arbeitszimmer_licht4_reachable').style.color = "#6f0f0f";
         document.getElementById('status_arbeitszimmer_licht4_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/arbeitszimmer/yoga") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_arbeitszimmer_yoga_reachable').style.color = "#094609";
         document.getElementById('status_arbeitszimmer_yoga_reachable').style.color = "#094609";
         document.getElementById('lights_arbeitszimmer_yoga_on').checked = deviceStatus.on;
         document.getElementById('lights_arbeitszimmer_yoga_bri').value = deviceStatus.bri;
      } else {
         document.getElementById('lights_arbeitszimmer_yoga_reachable').style.color = "#6f0f0f";
         document.getElementById('status_arbeitszimmer_yoga_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/arbeitszimmer/schalter") {
      if (deviceStatus.reachable === true) {
         document.getElementById('status_arbeitszimmer_schalter_reachable').style.color = "#094609";
         document.getElementById('status_arbeitszimmer_schalter_battery').innerHTML = deviceStatus.battery + "%";
         if (deviceStatus.battery < "15") {
            document.getElementById('status_arbeitszimmer_schalter_battery').style.background = "#6f0f0f";
         } else if (deviceStatus.battery < "30") {
            document.getElementById('status_arbeitszimmer_schalter_battery').style.background = "#909025";
         } else {
            document.getElementById('status_arbeitszimmer_schalter_battery').style.background = "#094609";
         }
      } else {
         document.getElementById('status_arbeitszimmer_sensor_reachable').style.color = "#6f0f0f";
         document.getElementById('status_arbeitszimmer_sensor_battery').innerHTML = "-";
         document.getElementById('status_arbeitszimmer_sensor_battery').style.background = "#6f0f0f";
      }
   }
   else if (device === "lights/badezimmer/sensor") {
      if (deviceStatus.reachable === true) {
         document.getElementById('status_badezimmer_sensor_reachable').style.color = "#094609";
         document.getElementById('status_badezimmer_sensor_battery').innerHTML = deviceStatus.battery + "%";
         if (deviceStatus.battery < "15") {
            document.getElementById('status_badezimmer_sensor_battery').style.background = "#6f0f0f";
         } else if (deviceStatus.battery < "30") {
            document.getElementById('status_badezimmer_sensor_battery').style.background = "#909025";
         } else {
            document.getElementById('status_badezimmer_sensor_battery').style.background = "#094609";
         }
      } else {
         document.getElementById('status_badezimmer_sensor_reachable').style.color = "#6f0f0f";
         document.getElementById('status_badezimmer_sensor_battery').innerHTML = "-";
         document.getElementById('status_badezimmer_sensor_battery').style.background = "#6f0f0f";
      }
   }
   else if (device === "lights/balkon") {
      if (deviceStatus.any_on === true) {
         document.getElementById('lights_balkon_on').checked = true;
      } else {
         document.getElementById('lights_balkon_on').checked = false;
      }
   }
   else if (device === "lights/balkon/licht") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_balkon_licht_reachable').style.color = "#094609";
         document.getElementById('status_balkon_licht_reachable').style.color = "#094609";
         document.getElementById('lights_balkon_licht_on').checked = deviceStatus.on;
         document.getElementById('lights_balkon_licht_bri').value = deviceStatus.bri;
         var rgb = xyToRgb(deviceStatus.xy[0], deviceStatus.xy[1], deviceStatus.bri);
         var hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
         document.getElementById('lights_balkon_licht_hex').value = hex;
      } else {
         document.getElementById('lights_balkon_licht_reachable').style.color = "#6f0f0f";
         document.getElementById('status_balkon_licht_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/flur") {
      if (deviceStatus.any_on === true) {
         document.getElementById('lights_flur_on').checked = true;
      } else {
         document.getElementById('lights_flur_on').checked = false;
      }
   }
   else if (device === "lights/flur/telefon") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_flur_telefon_reachable').style.color = "#094609";
         document.getElementById('status_flur_telefon_reachable').style.color = "#094609";
         document.getElementById('lights_flur_telefon_on').checked = deviceStatus.on;
         document.getElementById('lights_flur_telefon_bri').value = deviceStatus.bri;
         document.getElementById('lights_flur_telefon_ct').value = deviceStatus.ct;
      } else {
         document.getElementById('lights_flur_telefon_reachable').style.color = "#6f0f0f";
         document.getElementById('status_flur_telefon_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/flur/schrank") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_flur_schrank_reachable').style.color = "#094609";
         document.getElementById('status_flur_schrank_reachable').style.color = "#094609";
         document.getElementById('lights_flur_schrank_on').checked = deviceStatus.on;
         document.getElementById('lights_flur_schrank_bri').value = deviceStatus.bri;
         document.getElementById('lights_flur_schrank_ct').value = deviceStatus.ct;
      } else {
         document.getElementById('lights_flur_schrank_reachable').style.color = "#6f0f0f";
         document.getElementById('status_flur_schrank_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/flur/sensor") {
      if (deviceStatus.reachable === true) {
         document.getElementById('status_flur_sensor_reachable').style.color = "#094609";
         document.getElementById('status_flur_sensor_battery').innerHTML = deviceStatus.battery + "%";
         if (deviceStatus.battery < "15") {
            document.getElementById('status_flur_sensor_battery').style.background = "#6f0f0f";
         } else if (deviceStatus.battery < "30") {
            document.getElementById('status_flur_sensor_battery').style.background = "#909025";
         } else {
            document.getElementById('status_flur_sensor_battery').style.background = "#094609";
         }
      } else {
         document.getElementById('status_flur_sensor_reachable').style.color = "#6f0f0f";
         document.getElementById('status_flur_sensor_battery').innerHTML = "-";
         document.getElementById('status_flur_sensor_battery').style.background = "#6f0f0f";
      }
   }
   else if (device === "lights/flur/schalter") {
      if (deviceStatus.reachable === true) {
         document.getElementById('status_flur_schalter_reachable').style.color = "#094609";
         document.getElementById('status_flur_schalter_battery').innerHTML = deviceStatus.battery + "%";
         if (deviceStatus.battery < "15") {
            document.getElementById('status_flur_schalter_battery').style.background = "#6f0f0f";
         } else if (deviceStatus.battery < "30") {
            document.getElementById('status_flur_schalter_battery').style.background = "#909025";
         } else {
            document.getElementById('status_flur_schalter_battery').style.background = "#094609";
         }
      } else {
         document.getElementById('status_flur_sensor_reachable').style.color = "#6f0f0f";
         document.getElementById('status_flur_sensor_battery').innerHTML = "-";
         document.getElementById('status_flur_sensor_battery').style.background = "#6f0f0f";
      }
   }
   else if (device === "lights/schlafzimmer") {
      if (deviceStatus.any_on === true) {
         document.getElementById('lights_schlafzimmer_on').checked = true;
      } else {
         document.getElementById('lights_schlafzimmer_on').checked = false;
      }
   }
   else if (device === "lights/schlafzimmer/strom") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_schlafzimmer_strom_reachable').style.color = "#094609";
         document.getElementById('status_schlafzimmer_strom_reachable').style.color = "#094609";
         document.getElementById('lights_schlafzimmer_strom_on').checked = deviceStatus.on;
      } else {
         document.getElementById('lights_schlafzimmer_strom_reachable').style.color = "#6f0f0f";
         document.getElementById('status_schlafzimmer_strom_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/schlafzimmer/niklas") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_schlafzimmer_niklas_reachable').style.color = "#094609";
         document.getElementById('status_schlafzimmer_niklas_reachable').style.color = "#094609";
         document.getElementById('lights_schlafzimmer_niklas_on').checked = deviceStatus.on;
         document.getElementById('lights_schlafzimmer_niklas_bri').value = deviceStatus.bri;
      } else {
         document.getElementById('lights_schlafzimmer_niklas_reachable').style.color = "#6f0f0f";
         document.getElementById('status_schlafzimmer_niklas_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/schlafzimmer/tutku") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_schlafzimmer_tutku_reachable').style.color = "#094609";
         document.getElementById('status_schlafzimmer_tutku_reachable').style.color = "#094609";
         document.getElementById('lights_schlafzimmer_tutku_on').checked = deviceStatus.on;
         document.getElementById('lights_schlafzimmer_tutku_bri').value = deviceStatus.bri;
      } else {
         document.getElementById('lights_schlafzimmer_tutku_reachable').style.color = "#6f0f0f";
         document.getElementById('status_schlafzimmer_tutku_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/wohnzimmer/strom") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_wohnzimmer_strom_reachable').style.color = "#094609";
         document.getElementById('status_wohnzimmer_strom_reachable').style.color = "#094609";
         document.getElementById('lights_wohnzimmer_strom_on').checked = deviceStatus.on;
      } else {
         document.getElementById('lights_wohnzimmer_strom_reachable').style.color = "#6f0f0f";
         document.getElementById('status_wohnzimmer_strom_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/schlafzimmer/schalterniklas") {
      if (deviceStatus.reachable === true) {
         document.getElementById('status_schlafzimmer_schalterniklas_reachable').style.color = "#094609";
         document.getElementById('status_schlafzimmer_schalterniklas_battery').innerHTML = deviceStatus.battery + "%";
         if (deviceStatus.battery < "15") {
            document.getElementById('status_schlafzimmer_schalterniklas_battery').style.background = "#6f0f0f";
         } else if (deviceStatus.battery < "30") {
            document.getElementById('status_schlafzimmer_schalterniklas_battery').style.background = "#909025";
         } else {
            document.getElementById('status_schlafzimmer_schalterniklas_battery').style.background = "#094609";
         }
      } else {
         document.getElementById('status_schlafzimmer_schalterniklas_reachable').style.color = "#6f0f0f";
         document.getElementById('status_schlafzimmer_schalterniklas_battery').innerHTML = "-";
         document.getElementById('status_schlafzimmer_schalterniklas_battery').style.background = "#6f0f0f";
      }
   }
   else if (device === "lights/schlafzimmer/schaltertutku") {
      if (deviceStatus.reachable === true) {
         document.getElementById('status_schlafzimmer_schaltertutku_reachable').style.color = "#094609";
         document.getElementById('status_schlafzimmer_schaltertutku_battery').innerHTML = deviceStatus.battery + "%";
         if (deviceStatus.battery < "15") {
            document.getElementById('status_schlafzimmer_schaltertutku_battery').style.background = "#6f0f0f";
         } else if (deviceStatus.battery < "30") {
            document.getElementById('status_schlafzimmer_schaltertutku_battery').style.background = "#909025";
         } else {
            document.getElementById('status_schlafzimmer_schaltertutku_battery').style.background = "#094609";
         }
      } else {
         document.getElementById('status_schlafzimmer_schaltertutku_reachable').style.color = "#6f0f0f";
         document.getElementById('status_schlafzimmer_schaltertutku_battery').innerHTML = "-";
         document.getElementById('status_schlafzimmer_schaltertutku_battery').style.background = "#6f0f0f";
      }
   }
   else if (device === "lights/wohnzimmer") {
      if (deviceStatus.any_on === true) {
         document.getElementById('lights_wohnzimmer_on').checked = true;
      } else {
         document.getElementById('lights_wohnzimmer_on').checked = false;
      }
   }
   else if (device === "lights/wohnzimmer/esstisch") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_wohnzimmer_esstisch_reachable').style.color = "#094609";
         document.getElementById('status_wohnzimmer_esstisch_reachable').style.color = "#094609";
         document.getElementById('lights_wohnzimmer_esstisch_on').checked = deviceStatus.on;
         document.getElementById('lights_wohnzimmer_esstisch_bri').value = deviceStatus.bri;
         var rgb = xyToRgb(deviceStatus.xy[0], deviceStatus.xy[1], deviceStatus.bri);
         var hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
         document.getElementById('lights_wohnzimmer_esstisch_hex').value = hex;
      } else {
         document.getElementById('lights_wohnzimmer_esstisch_reachable').style.color = "#6f0f0f";
         document.getElementById('status_wohnzimmer_esstisch_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/wohnzimmer/vitrine") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_wohnzimmer_vitrine_reachable').style.color = "#094609";
         document.getElementById('status_wohnzimmer_vitrine_reachable').style.color = "#094609";
         document.getElementById('lights_wohnzimmer_vitrine_on').checked = deviceStatus.on;
         document.getElementById('lights_wohnzimmer_vitrine_bri').value = deviceStatus.bri;
         var rgb = xyToRgb(deviceStatus.xy[0], deviceStatus.xy[1], deviceStatus.bri);
         var hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
         document.getElementById('lights_wohnzimmer_vitrine_hex').value = hex;
      } else {
         document.getElementById('lights_wohnzimmer_vitrine_reachable').style.color = "#6f0f0f";
         document.getElementById('status_wohnzimmer_vitrine_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/wohnzimmer/tv") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_wohnzimmer_tv_reachable').style.color = "#094609";
         document.getElementById('status_wohnzimmer_tv_reachable').style.color = "#094609";
         document.getElementById('lights_wohnzimmer_tv_on').checked = deviceStatus.on;
         document.getElementById('lights_wohnzimmer_tv_bri').value = deviceStatus.bri;
         var rgb = xyToRgb(deviceStatus.xy[0], deviceStatus.xy[1], deviceStatus.bri);
         var hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
         document.getElementById('lights_wohnzimmer_tv_hex').value = hex;
      } else {
         document.getElementById('lights_wohnzimmer_tv_reachable').style.color = "#6f0f0f";
         document.getElementById('status_wohnzimmer_tv_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/wohnzimmer/komode") {
      if (deviceStatus.reachable === true) {
         document.getElementById('lights_wohnzimmer_komode_reachable').style.color = "#094609";
         document.getElementById('status_wohnzimmer_komode_reachable').style.color = "#094609";
         document.getElementById('lights_wohnzimmer_komode_on').checked = deviceStatus.on;
         document.getElementById('lights_wohnzimmer_komode_bri').value = deviceStatus.bri;
         document.getElementById('lights_wohnzimmer_komode_ct').value = deviceStatus.ct;
      } else {
         document.getElementById('lights_wohnzimmer_komode_reachable').style.color = "#6f0f0f";
         document.getElementById('status_wohnzimmer_komode_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/wohnzimmer/schalter") {
      if (deviceStatus.reachable === true) {
         document.getElementById('status_wohnzimmer_schalter_reachable').style.color = "#094609";
         document.getElementById('status_wohnzimmer_schalter_battery').innerHTML = deviceStatus.battery + "%";
         if (deviceStatus.battery < "15") {
            document.getElementById('status_wohnzimmer_schalter_battery').style.background = "#6f0f0f";
         } else if (deviceStatus.battery < "30") {
            document.getElementById('status_wohnzimmer_schalter_battery').style.background = "#909025";
         } else {
            document.getElementById('status_wohnzimmer_schalter_battery').style.background = "#094609";
         }
      } else {
         document.getElementById('status_wohnzimmer_schalter_reachable').style.color = "#6f0f0f";
         document.getElementById('status_wohnzimmer_schalter_battery').innerHTML = "-";
         document.getElementById('status_wohnzimmer_schalter_battery').style.background = "#6f0f0f";
      }
   }
   else if (device === "lights/wohnzimmer/sensor") {
      if (deviceStatus.reachable === true) {
         document.getElementById('status_wohnzimmer_sensor_reachable').style.color = "#094609";
         document.getElementById('status_wohnzimmer_sensor_battery').innerHTML = deviceStatus.battery + "%";
         if (deviceStatus.battery < "15") {
            document.getElementById('status_wohnzimmer_sensor_battery').style.background = "#6f0f0f";
         } else if (deviceStatus.battery < "30") {
            document.getElementById('status_wohnzimmer_sensor_battery').style.background = "#909025";
         } else {
            document.getElementById('status_wohnzimmer_sensor_battery').style.background = "#094609";
         }
      } else {
         document.getElementById('status_wohnzimmer_sensor_reachable').style.color = "#6f0f0f";
         document.getElementById('status_wohnzimmer_sensor_battery').innerHTML = "-";
         document.getElementById('status_wohnzimmer_sensor_battery').style.background = "#6f0f0f";
      }
   }
   else if (device === "lights/wohnzimmer/av") {
      if (deviceStatus.reachable === true) {
         document.getElementById('status_wohnzimmer_av_reachable').style.color = "#094609";
      
      } else {
         document.getElementById('status_wohnzimmer_av_reachable').style.color = "#6f0f0f";
        
      }
   }
   else if (device === "lights/sensor/presence") {
      document.getElementById('status_sensor_presence_lastupdated').innerHTML = deviceStatus.lastupdated;
      document.getElementById('status_sensor_presence_lastmove').innerHTML = deviceStatus.lastmove;
   }
   else if (device === "lights/temp/badezimmer") {
      var value = deviceStatus.temperature.toString().substring(0, 2);
      var temp = value + "° C";
      var width = parseInt(value) * 2;
      width = width.toString() + "%";
      document.getElementById('status_temp_badezimmer').innerHTML = temp;
      document.getElementById('status_temp_badezimmer').setAttribute("aria-valuenow", value);
      document.getElementById('status_temp_badezimmer').style.width = width;
      if (value > 12) {
         document.getElementById('status_temp_badezimmer').style.background = '#094609';
      } else {
         document.getElementById('status_temp_badezimmer').style.background = '#6f0f0f';
      }
   }
   else if (device === "lights/temp/flur") {
      var value = deviceStatus.temperature.toString().substring(0, 2);
      var temp = value + "° C";
      var width = parseInt(value) * 2;
      width = width.toString() + "%";
      document.getElementById('status_temp_flur').innerHTML = temp;
      document.getElementById('status_temp_flur').setAttribute("aria-valuenow", value);
      document.getElementById('status_temp_flur').style.width = width;
      if (value > 12) {
         document.getElementById('status_temp_flur').style.background = '#094609';
      } else {
         document.getElementById('status_temp_flur').style.background = '#6f0f0f';
      }
   }
   else if (device === "lights/temp/wohnzimmer") {
      var value = deviceStatus.temperature.toString().substring(0, 2);
      var temp = value + "° C";
      var width = parseInt(value) * 2;
      width = width.toString() + "%";
      document.getElementById('status_temp_wohnzimmer').innerHTML = temp;
      document.getElementById('status_temp_wohnzimmer').setAttribute("aria-valuenow", value);
      document.getElementById('status_temp_wohnzimmer').style.width = width;
      if (value > 12) {
         document.getElementById('status_temp_wohnzimmer').style.background = '#094609';
      } else {
         document.getElementById('status_temp_wohnzimmer').style.background = '#6f0f0f';
      }

   }
   else if (device === "lights/humid/badezimmer") {
      var value = deviceStatus.humidity.toString().substring(0, 2);
      var humid = value + "%";
      var width = parseInt(value);
      width = width.toString() + "%";
      document.getElementById('status_humid_badezimmer').innerHTML = humid;
      document.getElementById('status_humid_badezimmer').setAttribute("aria-valuenow", value);
      document.getElementById('status_humid_badezimmer').style.width = width;
      if (value > 40) {
         document.getElementById('status_humid_badezimmer').style.background = '#094609';
      } else {
         document.getElementById('status_humid_badezimmer').style.background = '#6f0f0f';
      }
   }
   else if (device === "lights/humid/wohnzimmer") {
      var value = deviceStatus.humidity.toString().substring(0, 2);
      var humid = value + "%";
      var width = parseInt(value);
      width = width.toString() + "%";
      document.getElementById('status_humid_wohnzimmer').innerHTML = humid;
      document.getElementById('status_humid_wohnzimmer').setAttribute("aria-valuenow", value);
      document.getElementById('status_humid_wohnzimmer').style.width = width;
      if (value > 40) {
         document.getElementById('status_humid_wohnzimmer').style.background = '#094609';
      } else {
         document.getElementById('status_humid_wohnzimmer').style.background = '#6f0f0f';
      }
   }
   else if (device === "lights/weather/kassel") {

      var value = deviceStatus.tempc.toString().substring(0, 2);
      value = value.replace(".", "");
      var temp = value + "° C";
      var width = parseInt(value) * 2;
      width = width.toString() + "%";
      document.getElementById('status_kassel_temp').innerHTML = temp;
      document.getElementById('status_kassel_temp').setAttribute("aria-valuenow", value);
      document.getElementById('status_kassel_temp').style.width = width;
      if (value > 12) {
         document.getElementById('status_kassel_temp').style.background = '#094609';
      } else {
         document.getElementById('status_kassel_temp').style.background = '#6f0f0f';
      }

      var value = deviceStatus.humidity.toString().substring(0, 2);
      var humid = value + "%";
      var width = parseInt(value);
      width = width.toString() + "%";
      document.getElementById('status_kassel_humid').innerHTML = humid;
      document.getElementById('status_kassel_humid').setAttribute("aria-valuenow", value);
      document.getElementById('status_kassel_humid').style.width = width;
      if (value > 40) {
         document.getElementById('status_kassel_humid').style.background = '#094609';
      } else {
         document.getElementById('status_kassel_humid').style.background = '#6f0f0f';
      }
   }
   else if (device === "lights/avremote/volume") {
      var val = deviceStatus.Val;
      document.getElementById('tv_remote_volume').innerHTML = val;
      document.getElementById('tv_remote_volSlide').value = val;
   }
   else if (device === "lights/avremote/power") {
      document.getElementById('lights_avremote_power_on').checked = deviceStatus.on;
   }
   else if (device === "lights/webmon/cloud") {
      if (deviceStatus === true) {
         document.getElementById('status_webmon_cloud_reachable').style.color = "#094609";
      } else {
         document.getElementById('status_webmon_cloud_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/webmon/niklas-stephan") {
      if (deviceStatus === true) {
         document.getElementById('status_webmon_niklas-stephan_reachable').style.color = "#094609";
      } else {
         document.getElementById('status_webmon_niklas-stephan_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/webmon/shopbbraun") {
      if (deviceStatus === true) {
         document.getElementById('status_webmon_shopbbraun_reachable').style.color = "#094609";
      } else {
         document.getElementById('status_webmon_shopbbraun_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/webmon/linutra") {
      if (deviceStatus === true) {
         document.getElementById('status_webmon_linutra_reachable').style.color = "#094609";
      } else {
         document.getElementById('status_webmon_linutra_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/webmon/home") {
      if (deviceStatus === true) {
         document.getElementById('status_webmon_home_reachable').style.color = "#094609";
      } else {
         document.getElementById('status_webmon_home_reachable').style.color = "#6f0f0f";
      }
   }
   else if (device === "lights/webmon/quickscot") {
      if (deviceStatus === true) {
         document.getElementById('status_webmon_quickscot_reachable').style.color = "#094609";
      } else {
         document.getElementById('status_webmon_quickscot_reachable').style.color = "#6f0f0f";
      }
   }
}
function updateAll() {
   var logdata = timestamp('timestamp')+ " - Refreshing Api Data";
   console.log("%c"+logdata, "color: green;");
   updateStatus('system');
   updateStatus('lights/arbeitszimmer');
   updateStatus('lights/arbeitszimmer/licht1');
   updateStatus('lights/arbeitszimmer/licht2');
   updateStatus('lights/arbeitszimmer/licht3');
   updateStatus('lights/arbeitszimmer/licht4');
   updateStatus('lights/arbeitszimmer/yoga');
   updateStatus('lights/arbeitszimmer/schalter');
   updateStatus('lights/badezimmer/sensor');
   updateStatus('lights/balkon');
   updateStatus('lights/balkon/licht');
   updateStatus('lights/flur');
   updateStatus('lights/flur/schrank');
   updateStatus('lights/flur/telefon');
   updateStatus('lights/flur/sensor');
   updateStatus('lights/flur/schalter');
   updateStatus('lights/wohnzimmer');
   updateStatus('lights/wohnzimmer/strom');
   updateStatus('lights/wohnzimmer/esstisch');
   updateStatus('lights/wohnzimmer/vitrine');
   updateStatus('lights/wohnzimmer/tv');
   updateStatus('lights/wohnzimmer/komode');
   updateStatus('lights/wohnzimmer/schalter');
   updateStatus('lights/wohnzimmer/sensor');
   updateStatus('lights/wohnzimmer/av');
   updateStatus('lights/schlafzimmer');
   updateStatus('lights/schlafzimmer/niklas');
   updateStatus('lights/schlafzimmer/tutku');
   updateStatus('lights/schlafzimmer/strom');
   updateStatus('lights/schlafzimmer/schaltertutku');
   updateStatus('lights/schlafzimmer/schalterniklas');
   updateStatus('lights/sensor/presence');
   updateStatus('lights/temp/flur');
   updateStatus('lights/temp/badezimmer');
   updateStatus('lights/temp/wohnzimmer');
   updateStatus('lights/humid/badezimmer');
   updateStatus('lights/humid/wohnzimmer');
   updateStatus('lights/weather/kassel');
   updateStatus('lights/avremote/volume');
   updateStatus('lights/avremote/power');
   updateStatus('lights/webmon/cloud');
   updateStatus('lights/webmon/home');
   updateStatus('lights/webmon/niklas-stephan');
   updateStatus('lights/webmon/linutra');
   updateStatus('lights/webmon/quickscot');
   updateStatus('lights/webmon/shopbbraun');
   updateCalendar();
}
function updateKasselcam() {
   var random = (Math.floor(Math.random() * 10000));
   value = "api/webcam?" + random;
   document.getElementById('kasselcam').setAttribute("src", value);
}
function updateCalendar() {
   let url = 'api/cal';
   fetch(url).then(function (response) {
      return response.json();
   }).then(function (json) {
      var data = json.data;
      var html = "";
      const sortedActivities = data.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      var iterator = sortedActivities.values();
      var counter = 0;
      for (let elements of iterator) {
         if (counter < 5 && elements.summary != "undefined") {
            var currentContent = html;
            var startDate = elements.startDate.substring(0, 10);
            var startTime = elements.startDate.substring(11, 16);
            var endTime = elements.endDate.substring(11, 16);
            var additionalContent = '<li class="list-group-item"><h5>' + startDate + '</h5>';
            if (startTime.length > 1) {
               additionalContent = additionalContent + '<p class="mb-0"> ' + startTime + ' - ' + endTime + ' </p>';
            }

            additionalContent = additionalContent + '<p class="mb-0">' + elements.summary + '</p></li>';
            var targetContent = additionalContent + currentContent;
            html = targetContent;
         }
         counter = counter + 1;
      }

      document.getElementById('calendarContent').innerHTML = html;
   }).catch(function (error) {
      console.log("%cFehler beim Abruf des Kalenders", "color: red;");
      //console.log(error);
      var html = '<li class="list-group-item"><h5>Fehler beim Abruf</h5></li>';
      document.getElementById('calendarContent').innerHTML = html;
   });

}
function postStatus(device, action, value) {
   async function postData(url = '', data) {
      const response = await fetch(url, {
         method: 'POST', cache: 'no-cache', credentials: 'same-origin',
         body: data
      });
      return response.json();
   }
   var content = '{ "' + action + '": ' + value + ' }';
   postData('api/post/' + device, content)
      .then(data => {
         var logdata = timestamp('timestamp')+ " - Send command: "+content+" to: "+device;
         console.log("%c"+logdata, "color: green;");
         //console.log(data);
      });
}
function sendState(item) {
   if (item == "lights_arbeitszimmer_on") {
      value = document.getElementById('lights_arbeitszimmer_on').checked;
      postStatus("arbeitszimmer", "on", value);
   } else
      if (item == "lights_arbeitszimmer_licht1_on") {
         value = document.getElementById('lights_arbeitszimmer_licht1_on').checked;
         postStatus("arbeitszimmer/licht1", "on", value);
      } else
         if (item == "lights_arbeitszimmer_licht1_bri") {
            value = document.getElementById('lights_arbeitszimmer_licht1_bri').value;
            postStatus("arbeitszimmer/licht1", "bri", value);
         } else
            if (item == "lights_arbeitszimmer_licht2_on") {
               value = document.getElementById('lights_arbeitszimmer_licht2_on').checked;
               postStatus("arbeitszimmer/licht2", "on", value);
            } else
               if (item == "lights_arbeitszimmer_licht2_bri") {
                  value = document.getElementById('lights_arbeitszimmer_licht2_bri').value;
                  postStatus("arbeitszimmer/licht2", "bri", value);
               } else
                  if (item == "lights_arbeitszimmer_licht3_on") {
                     value = document.getElementById('lights_arbeitszimmer_licht3_on').checked;
                     postStatus("arbeitszimmer/licht3", "on", value);
                  } else
                     if (item == "lights_arbeitszimmer_licht3_bri") {
                        value = document.getElementById('lights_arbeitszimmer_licht3_bri').value;
                        postStatus("arbeitszimmer/licht3", "bri", value);
                     } else
                        if (item == "lights_arbeitszimmer_licht4_on") {
                           value = document.getElementById('lights_arbeitszimmer_licht4_on').checked;
                           postStatus("arbeitszimmer/licht4", "on", value);
                        } else
                           if (item == "lights_arbeitszimmer_licht4_bri") {
                              value = document.getElementById('lights_arbeitszimmer_licht4_bri').value;
                              postStatus("arbeitszimmer/licht4", "bri", value);
                           } else
                              if (item == "lights_arbeitszimmer_yoga_on") {
                                 value = document.getElementById('lights_arbeitszimmer_yoga_on').checked;
                                 postStatus("arbeitszimmer/yoga", "on", value);
                              } else
                                 if (item == "lights_arbeitszimmer_yoga_bri") {
                                    value = document.getElementById('lights_arbeitszimmer_yoga_bri').value;
                                    postStatus("arbeitszimmer/yoga", "bri", value);
                                 } else
                                    if (item == "lights_balkon_on") {
                                       value = document.getElementById('lights_balkon_on').checked;
                                       postStatus("balkon", "on", value);
                                    } else
                                       if (item == "lights_balkon_licht_on") {
                                          value = document.getElementById('lights_balkon_licht_on').checked;
                                          postStatus("balkon/licht", "on", value);
                                       } else
                                          if (item == "lights_balkon_licht_bri") {
                                             value = document.getElementById('lights_balkon_licht_bri').value;
                                             postStatus("balkon/licht", "bri", value);
                                          } else
                                             if (item == "lights_balkon_licht_hex") {
                                                value = document.getElementById('lights_balkon_licht_hex').value;
                                                var rgb = hexToRGB(value);
                                                var xy = RGBToXy(rgb);
                                                var xy = '"' + xy + '"';
                                                postStatus("balkon/licht", "xy", xy);
                                             } else
                                                if (item == "lights_flur_on") {
                                                   value = document.getElementById('lights_flur_on').checked;
                                                   postStatus("flur", "on", value);
                                                } else
                                                   if (item == "lights_flur_schrank_on") {
                                                      value = document.getElementById('lights_flur_schrank_on').checked;
                                                      postStatus("flur/schrank", "on", value);
                                                   } else
                                                      if (item == "lights_flur_schrank_bri") {
                                                         value = document.getElementById('lights_flur_schrank_bri').value;
                                                         postStatus("flur/schrank", "bri", value);
                                                      } else
                                                         if (item == "lights_flur_schrank_ct") {
                                                            value = document.getElementById('lights_flur_schrank_ct').value;
                                                            postStatus("flur/schrank", "ct", value);
                                                         } else
                                                            if (item == "lights_flur_telefon_on") {
                                                               value = document.getElementById('lights_flur_telefon_on').checked;
                                                               postStatus("flur/telefon", "on", value);
                                                            } else
                                                               if (item == "lights_flur_telefon_bri") {
                                                                  value = document.getElementById('lights_flur_telefon_bri').value;
                                                                  postStatus("flur/telefon", "bri", value);
                                                               } else
                                                                  if (item == "lights_flur_telefon_ct") {
                                                                     value = document.getElementById('lights_flur_telefon_ct').value;
                                                                     postStatus("flur/telefon", "ct", value);
                                                                  } else
                                                                     if (item == "lights_schlafzimmer_on") {
                                                                        value = document.getElementById('lights_schlafzimmer_on').checked;
                                                                        postStatus("schlafzimmer", "on", value);
                                                                     } else
                                                                        if (item == "lights_schlafzimmer_tutku_on") {
                                                                           value = document.getElementById('lights_schlafzimmer_tutku_on').checked;
                                                                           postStatus("schlafzimmer/tutku", "on", value);
                                                                        } else
                                                                           if (item == "lights_schlafzimmer_tutku_bri") {
                                                                              value = document.getElementById('lights_schlafzimmer_tutku_bri').value;
                                                                              postStatus("schlafzimmer/tutku", "bri", value);
                                                                           } else
                                                                              if (item == "lights_schlafzimmer_niklas_on") {
                                                                                 value = document.getElementById('lights_schlafzimmer_niklas_on').checked;
                                                                                 postStatus("schlafzimmer/niklas", "on", value);
                                                                              } else
                                                                                 if (item == "lights_schlafzimmer_niklas_bri") {
                                                                                    value = document.getElementById('lights_schlafzimmer_niklas_bri').value;
                                                                                    postStatus("schlafzimmer/niklas", "bri", value);
                                                                                 } else
                                                                                    if (item == "lights_schlafzimmer_strom_on") {
                                                                                       value = document.getElementById('lights_schlafzimmer_strom_on').checked;
                                                                                       postStatus("schlafzimmer/strom", "on", value);
                                                                                    } else

                                                                                       if (item == "lights_schlafzimmer_strom_on") {
                                                                                          value = document.getElementById('lights_schlafzimmer_strom_on').checked;
                                                                                          postStatus("schlafzimmer/strom", "on", value);
                                                                                       } else
                                                                                          if (item == "lights_wohnzimmer_on") {
                                                                                             value = document.getElementById('lights_wohnzimmer_on').checked;
                                                                                             postStatus("wohnzimmer", "on", value);
                                                                                          } else

                                                                                             if (item == "lights_wohnzimmer_strom_on") {
                                                                                                value = document.getElementById('lights_wohnzimmer_strom_on').checked;
                                                                                                postStatus("wohnzimmer/strom", "on", value);
                                                                                             } else
                                                                                                if (item == "lights_wohnzimmer_esstisch_on") {
                                                                                                   value = document.getElementById('lights_wohnzimmer_esstisch_on').checked;
                                                                                                   postStatus("wohnzimmer/esstisch", "on", value);
                                                                                                } else
                                                                                                   if (item == "lights_wohnzimmer_esstisch_bri") {
                                                                                                      value = document.getElementById('lights_wohnzimmer_esstisch_bri').value;
                                                                                                      postStatus("wohnzimmer/esstisch", "bri", value);
                                                                                                   } else
                                                                                                      if (item == "lights_wohnzimmer_esstisch_hex") {
                                                                                                         value = document.getElementById('lights_wohnzimmer_esstisch_hex').value;
                                                                                                         var rgb = hexToRGB(value);
                                                                                                         var xy = RGBToXy(rgb);
                                                                                                         var xy = '"' + xy + '"';
                                                                                                         postStatus("wohnzimmer/esstisch", "xy", xy);
                                                                                                      } else
                                                                                                         if (item == "lights_wohnzimmer_vitrine_on") {
                                                                                                            value = document.getElementById('lights_wohnzimmer_vitrine_on').checked;
                                                                                                            postStatus("wohnzimmer/vitrine", "on", value);
                                                                                                         } else
                                                                                                            if (item == "lights_wohnzimmer_vitrine_bri") {
                                                                                                               value = document.getElementById('lights_wohnzimmer_vitrine_bri').value;
                                                                                                               postStatus("wohnzimmer/vitrine", "bri", value);
                                                                                                            } else
                                                                                                               if (item == "lights_wohnzimmer_vitrine_hex") {
                                                                                                                  value = document.getElementById('lights_wohnzimmer_vitrine_hex').value;
                                                                                                                  var rgb = hexToRGB(value);
                                                                                                                  var xy = RGBToXy(rgb);
                                                                                                                  var xy = '"' + xy + '"';
                                                                                                                  postStatus("wohnzimmer/vitrine", "xy", xy);
                                                                                                               } else
                                                                                                                  if (item == "lights_wohnzimmer_tv_on") {
                                                                                                                     value = document.getElementById('lights_wohnzimmer_tv_on').checked;
                                                                                                                     postStatus("wohnzimmer/tv", "on", value);
                                                                                                                  } else
                                                                                                                     if (item == "lights_wohnzimmer_tv_bri") {
                                                                                                                        value = document.getElementById('lights_wohnzimmer_tv_bri').value;
                                                                                                                        postStatus("wohnzimmer/tv", "bri", value);
                                                                                                                     } else
                                                                                                                        if (item == "lights_wohnzimmer_tv_hex") {
                                                                                                                           value = document.getElementById('lights_wohnzimmer_tv_hex').value;
                                                                                                                           var rgb = hexToRGB(value);
                                                                                                                           var xy = RGBToXy(rgb);
                                                                                                                           var xy = '"' + xy + '"';
                                                                                                                           postStatus("wohnzimmer/tv", "xy", xy);
                                                                                                                        } else
                                                                                                                           if (item == "lights_wohnzimmer_komode_on") {
                                                                                                                              value = document.getElementById('lights_wohnzimmer_komode_on').checked;
                                                                                                                              postStatus("wohnzimmer/komode", "on", value);
                                                                                                                           } else
                                                                                                                              if (item == "lights_wohnzimmer_komode_bri") {
                                                                                                                                 value = document.getElementById('lights_wohnzimmer_komode_bri').value;
                                                                                                                                 postStatus("wohnzimmer/komode", "bri", value);
                                                                                                                              } else
                                                                                                                                 if (item == "lights_wohnzimmer_komode_ct") {
                                                                                                                                    value = document.getElementById('lights_wohnzimmer_komode_ct').value;
                                                                                                                                    postStatus("wohnzimmer/komode", "ct", value);
                                                                                                                                 } else
                                                                                                                                    if (item == "lights_avremote_power_on") {
                                                                                                                                       value = document.getElementById('lights_avremote_power_on').checked;
                                                                                                                                       postStatus("av/on", "on", value);
                                                                                                                                    } else
                                                                                                                                       if (item == "tv_remote_volSlide") {
                                                                                                                                          value = document.getElementById('tv_remote_volSlide').value;
                                                                                                                                          postStatus("av/volume", "vol", value);
                                                                                                                                       } else
                                                                                                                                          if (item == "tv_remote_navUp") {
                                                                                                                                             postStatus("av/nav", "nav", '"Up"');
                                                                                                                                          } else
                                                                                                                                             if (item == "tv_remote_navLeft") {
                                                                                                                                                postStatus("av/nav", "nav", '"Left"');
                                                                                                                                             } else
                                                                                                                                                if (item == "tv_remote_navRight") {
                                                                                                                                                   postStatus("av/nav", "nav", '"Right"');
                                                                                                                                                } else
                                                                                                                                                   if (item == "tv_remote_navDown") {
                                                                                                                                                      postStatus("av/nav", "nav", '"Down"');
                                                                                                                                                   } else
                                                                                                                                                      if (item == "tv_remote_navReturn") {
                                                                                                                                                         postStatus("av/nav", "nav", '"Return"');
                                                                                                                                                      } else
                                                                                                                                                         if (item == "tv_remote_navSel") {
                                                                                                                                                            postStatus("av/nav", "nav", '"Sel"');
                                                                                                                                                         } else
                                                                                                                                                            if (item == "tv_remote_navHome") {
                                                                                                                                                               postStatus("av/nav/home", "nav", '"Return to Home"');
                                                                                                                                                            } else
                                                                                                                                                               if (item == "tv_remote_mute") {
                                                                                                                                                                  postStatus("av/mute", "mute", '"true"');
                                                                                                                                                               }
   setTimeout(() => { updateAll(); }, 2000);
}
async function registerSW() {
   if ('serviceWorker' in navigator) {
      try {
         await navigator.serviceWorker.register('./sw.js');
      } catch (e) {
         //alert('ServiceWorker registration failed. Sorry about that.'); 
      }
   } else {

   }
}