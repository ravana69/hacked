var hackedText = [
`# factorial.py`,
`def factcal(n): # Create the factorial of a positive integer      `,
`fact = 1  `,
`while n>0:`,
`fact *= n  
		              n=n-1  `,
`if(n<=1):  `,
`break`,
`else: # Display the message if n is not a positive integer.`,
`print('Input a correct number....')  `,
`return`,
`return fact  `,

`def factdata(n): # return the numbers of factorial x  `,
`result = []  `,
`while n>0:  `,
"result.append(n) ",
`n = n - 1  `,
`if(n==0): `,
`break  `,
`else: # Display the message if n is not a positive integer. `,
`print('Input a correct number....')`,
`return  `,
`return result `],

typePos = 0,
startTime = new Date(),
timeLimit = 10000,
percentageComplete = 0,
glitches = [],
off = false,
offTimer = false,
startHack = true,
numberOfGlitches = 5,
glitchoff;

var getRandom = function (max, min, decimal) {
  if (decimal) {
    return (Math.random() / (max - min / max) + min / max).toFixed(2);
  } else {
    return Math.round(Math.random() * (max - min) + min);
  }
};

var Glitch = function () {
  this.x = getRandom(window.innerWidth, 0);
  this.y = getRandom(window.innerHeight, 0);
  this.color = getRandom(9, 0);
  if (this.color <= 4) {
    this.color = "black";
  } else if (this.color <= 5) {
    this.color = "#1B173F";
  } else if (this.color <= 6) {
    this.color = "white";
  } else if (this.color <= 7) {
    this.color = "green";
  } else {
    this.color = "#4B9DA0";
  }

  var chance = getRandom(10, 0);
  this.styles = {
    backgroundColor: this.color,
    top: this.y + "px",
    width: 1,
    // height: getRandom(20, 1) + "%",
    opacity: getRandom(1, 0.5, true) };

  if (chance <= 3) {
    var size = getRandom(40, 1) + "px";
    this.styles.width = size;
    this.styles.height = size;
  } else {
    var size = getRandom(5, 1) + "px";
    this.styles.width = size;
    this.styles.height = size;
  }
  if (chance <= 5) {
    this.styles.left = this.x + "px";
  } else {
    this.styles.right = this.x + "px";
  }
};

var addGlitches = function (numberOfGlitches) {
  var i = 0;
  for (i; i < numberOfGlitches; i++) {
    glitches.push(new Glitch());
    var className = "glitch-" + (glitches.length - 1);
    var glitch = document.createElement("div");
    $(glitch).attr("class", "glitch " + className);
    $(glitch).css(glitches[glitches.length - 1].styles);
    $(".glitches").append(glitch);
  }
};

var removeGlitches = function () {
  $(".glitches").replaceWith('<div class="glitches"></div>');
  glitches = [];

};

// var updateGlitches = function() {
//   for (var i = 0; i < glitches.length; i++) {
//     var height = getRandom(20, 1) + "%",
//       width = getRandom(30, 1) + "px",
//       opacity = getRandom(1, 0.01, true),
//       x = getRandom(window.innerWidth, 0),
//       y = getRandom(window.innerHeight, 0);

//     glitches[i].styles.height = width;
//     glitches[i].styles.opacity = opacity;
//     glitches[i].styles.width = width;
//     glitches[i].styles.top = y;

//     if(glitches[i].styles.hasOwnProperty("left")) {
//       glitches[i].styles.left = x;
//     }

//     $(".glitch-" + i).css(glitches[i].styles);
//   }
// };

var browserInfo =
navigator.appCodeName + navigator.appVersion + "@" + navigator.platform;

$(".cmd-title").append(browserInfo);
var cmdInput = $(".cmd-input");

var indentText = function (tabs) {
  var indents = "";
  for (var i = 0; i < tabs; i++) {
    indents += "&nbsp;";
  }
  return indents;
};

var hackThePlanet = function () {
  var length = hackedText.length,i = typePos;

  if (typePos >= length - 1) {
    typePos = 0;
  }
  var indents = indentText(Math.round(Math.random() * (10 - 1) + 1));
  $(cmdInput).append(indents + hackedText[i] + "<br>");
  typePos++;
  var scrollPos = $(cmdInput)[0].scrollHeight;
  $(cmdInput).scrollTop(scrollPos);
};

var updateProgressBar = function () {
  $(".install-progress-bar > p").text(percentageComplete + "%");
  $(".install-progress-bar > span").css("width", percentageComplete + "%");
};

var checkStatus = function () {
  if (startHack) {
    timeLimit -= Math.round(Math.random() * (500 - 200) + 200);
    var currentTime = new Date() - startTime;
    percentageComplete = Math.round(currentTime / timeLimit * 100);
    if (currentTime >= timeLimit) {
      startHack = false;
      addGlitches(numberOfGlitches);
      glitchOff = setInterval(function () {
        if (!startHack && !off) {
          // updateGlitches();
          addGlitches(200);
        }
        if (!startHack && off) {
          $(".wrapper").addClass("off");
          removeGlitches();
          window.clearInterval(glitchOff);
        }
      }, 400);
      var glitchOff = setInterval(function () {
        if (!startHack && !off) {
          // updateGlitches();
          addGlitches(200);
        }
        if (!startHack && off) {
          $(".wrapper").addClass("off");
          removeGlitches();
          window.clearInterval(glitchOff);
        }
      }, 400);
      percentageComplete = 100;
      $(".install-title").text("Malware installed successfully!");
      if (!off && !offTimer) {
        offTimer = true;
        setTimeout(function () {
          off = true;
        }, 5000);
      }
    }
    updateProgressBar();
  }
};

var restart = function () {
  typePos = 0;
  startTime = new Date();
  timeLimit = 10000;
  percentageComplete = 0;
  glitches = [];
  off = false;
  offTimer = false;
  updateProgressBar();
  setTimeout(function () {
    startHack = true;
    $(".install-title").text("Installing Malware!");
    $(".wrapper").removeClass("off");
    $(".glitches").replaceWith('<div class="glitches"></div>');
    glitchOff = setInterval(function () {
      if (!startHack && !off) {
        // updateGlitches();
        addGlitches(40);
      }
      if (!startHack && off) {
        $(".wrapper").addClass("off");
        removeGlitches();
        window.clearInterval(glitchOff);
      }
    }, 400);
  }, 400);
};

$(".more-ram").on("click", function () {
  restart();
});

setInterval(function () {
  if (startHack) {
    hackThePlanet();
  }
}, 100);

setInterval(function () {
  checkStatus();
}, 1000);