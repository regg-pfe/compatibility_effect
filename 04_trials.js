// In this file you can specify the trial data for your experiment

 const count_time = function (data, next) {
  if (typeof window.timeout === 'undefined') {
    window.timeout = [];
  }
  // add the timeout to the timeoutarray
  window.timeout.push(setTimeout(function () {
    $(".magpie-view-stimulus").addClass("magpie-invisible");
    $('#feedback').text('Please answer more quickly!');
  }, 2000));
  next();
};

const samples = {
  key_press: [
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    },
    {
      picture: "images/square_2x2.jpg",
      expected: "small",
    },
    {
      picture: "images/square_4x4.jpg",
      expected: "large",
    }
  ]
};
