const removeZeroAfterDecimal = (num) => {
  let numString = num.toString();
  let dotIndex = numString.indexOf(".");
  //  console.log(dotIndex);
  if (numString[dotIndex + 1] === "0") {
    // console.log(numString[dotIndex+1]);
    let noZeroAfterPoint = numString.substring(0, dotIndex);
    // console.log("no decimal is "+noZeroAfterPoint);
    return noZeroAfterPoint;
  } else {
    return num;
  }
};
export const preetifyViews = (viewCount) => {
  let preetifiedViews = viewCount;
  //1k to 9k
  if (999 < viewCount && viewCount < 9999) {
    let views = viewCount / 1000;
    let fixedOne = views.toFixed(1);
    preetifiedViews = removeZeroAfterDecimal(fixedOne) + "K";
  }
  //10k to 999k
  else if (9999 < viewCount && viewCount < 999999) {
    let views = viewCount / 1000;
    let fixedOne = views.toFixed(0);
    preetifiedViews = fixedOne + "K";
  }
  //1M to 9M
  else if (999999 < viewCount && viewCount < 9999999) {
    let views = viewCount / 1000000;
    let fixedOne = views.toFixed(1);
    preetifiedViews = removeZeroAfterDecimal(fixedOne) + "M";
  }
  //10M to 999M
  else if (9999999 < viewCount && viewCount < 999999999) {
    let views = viewCount / 1000000;
    let fixedOne = views.toFixed(0);
    preetifiedViews = removeZeroAfterDecimal(fixedOne) + "M";
  }

  //1B to 9B
  else if (999999999 < viewCount && viewCount < 9999999999) {
    let views = viewCount / 1000000000;
    let fixedOne = views.toFixed(1);
    preetifiedViews = removeZeroAfterDecimal(fixedOne) + "B";
  }

  //10B to 999B
  else if (999999999 < viewCount && viewCount < 999999999999) {
    let views = viewCount / 1000000000;
    let fixedOne = views.toFixed(0);
    preetifiedViews = removeZeroAfterDecimal(fixedOne) + "B";
  }

  return preetifiedViews;
};
// console.log(preetifyViews(2031677556));
// const number = 231677556748;
// console.log(number.toLocaleString("en-in"));

export const daysAgo = (dateAndTime) => {
  const currentDateAndTime = new Date();
  const publishedDateAndTime = new Date(dateAndTime);
  const diffInMilliseconds = currentDateAndTime - publishedDateAndTime;
  // console.log((diffInMilliseconds/1000)/60/60/24/30/12 +" year");
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const year = Math.floor(months / 12);
  if (seconds > 59) {
    if (minutes > 59) {
      if (hours > 24) {
        if (days > 30) {
          if (months > 11) {
            if (year === 1) {
              return year + " year ago";
            } else {
              return year + " years ago";
            }
          } else {
            if (months === 0) {
              return months + " month ago";
            } else {
              return months + " months ago";
            }
          }
        } else {
          if (days === 1) {
            return days + " day ago";
          } else {
            return days + " days ago";
          }
        }
      } else {
        if (hours === 1) {
          return hours + " hour ago";
        } else {
          return hours + " hours ago";
        }
      }
    } else {
      if (minutes === 1) {
        return minutes + " minute ago";
      } else {
        return minutes + " minutes ago";
      }
    }
  } else {
    return "few seconds ago";
  }
};

// console.log(daysAgo("2023-08-31T006:30:11Z"))
// console.log(daysAgo("2023-09-29T12:30:25Z"))
// console.log(daysAgo("2012-01-29T12:30:25Z"));
 
export const preetifyDuration = (durationISOString) => {
  let result = durationISOString.slice(2);
  let H_Index = result.match(/H/);
  let M_Index = result.match(/M/);
  let S_Index = result.match(/S/);
  let hours = null;
  let mins = null;
  let secs = null;
  if (H_Index) {
    H_Index = result.match(/H/);
    hours = result.slice(0, H_Index.index);
    result = result.slice(H_Index.index + 1);
  }
  if (M_Index) {
    M_Index = result.match(/M/);
    mins = result.slice(0, M_Index.index);
    result = result.slice(M_Index.index + 1);
  }
  if (S_Index) {
    S_Index = result.match(/S/);
    secs = result.slice(0, S_Index.index);
    result = result.slice(S_Index.index + 1);
  }

  if (durationISOString.match(/H/)) {
    // let finalResult =  null;
    // if (mins) {

    // }
    // return `${hours}:${mins>9? mins:"0"+mins}:${secs>9? secs:"0"+secs }`
    return `${hours}:${mins ? (mins > 9 ? mins : "0" + mins) : "00"}:${
      secs ? (secs > 9 ? secs : "0" + secs) : "00"
    }`;
  } else if (durationISOString.match(/M/)) {
    // return mins + ":" + secs;
    return `${mins}:${secs?  secs > 9 ? secs : "0" + secs : "00"}`;
  } else {
    if (secs > 9) {
      return "0:" + secs;
    } else {
      return "0:0" + secs;
    }
  }
};

// console.log(preetifyDuration("PT11H58M30S"));
// console.log(preetifyDuration("PT58M30S"));

// console.log(preetifyDuration("PT11H4M7S"));

// console.log(preetifyDuration("PT2H3M"));
// console.log(preetifyDuration("PT2H4S"));
// console.log(preetifyDuration("PT4H"));
// console.log(preetifyDuration("PT6M"));
// console.log(preetifyDuration("PT8S"));
