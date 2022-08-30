import { useEffect } from 'react';
import { forIn, startsWith, trim, isEmpty } from 'lodash';
import { MEDIA_TYPE, ACCEPT_TYPE } from '@constants';
import Config from '@root/config';


export const checkEmail = (email: string) => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return mailformat.test(email)
}


export const reactLocalStorage = {
  set: function (key: any, value: any) {
    window.localStorage[key] = value;
    return window.localStorage[key];
  },
  get: function (key: any, defaultValue: any) {
    return window.localStorage[key] || defaultValue;
  },
  setObject: function (key: any, value: any) {
    window.localStorage[key] = JSON.stringify(value);
    return window.localStorage[key];
  },
  getObject: function (key: any, value: any) {
    return JSON.parse(window.localStorage[key] || '{}');
  },
  clear: function () {
    if (typeof window !== "undefined") {
      forIn(window.localStorage, (value: string, objKey: string) => {
        if (objKey.startsWith('eko-') || objKey.startsWith('audio-')) {
          window.localStorage.removeItem(objKey);
        }
      });
    }
    return;
  },
  removeItem: function (key: any) {
    return window.localStorage.removeItem(key);
  },
};

export const hostname = (url) => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    match != null &&
    match?.length > 2 &&
    typeof match[2] === 'string' &&
    match[2]?.length > 0
  )
    return match[2];
};

export const getImageUrl = (media, size) => {
  switch (size) {
    case 'small':
      return (
        media?.cdnSmall ??
        media?.cdnMedium ??
        media?.cdnLarge ??
        media?.cdnOrigin ??
        media?.url ??
        media?.fileUrl ??
        ''
      );
    case 'medium':
      return (
        media?.cdnMedium ??
        media?.cdnLarge ??
        media?.cdnOrigin ??
        media?.cdnSmall ??
        media?.url ??
        media?.fileUrl ??
        ''
      );
    case 'large':
      return (
        media?.cdnLarge ??
        media?.cdnMedium ??
        media?.cdnSmall ??
        media?.cdnOrigin ??
        media?.url ??
        media?.fileUrl ??
        ''
      );
    default:
      return (
        media?.cdnOrigin ??
        media?.cdnMedium ??
        media?.cdnLarge ??
        media?.url ??
        media?.fileUrl ??
        ''
      );
  }
};

export const getMediaUrl = (media) => {
  return (
    media?.cdnOrigin ?? media?.cdnMedium ?? media?.cdnLarge ?? media?.url ?? ''
  );
};

export const getFileType = (contentType) => {
  if (contentType) {
    let listContentType = contentType.split('/');
    return listContentType[0];
  }
  return 'image';
};

export const getFileTail = (contentType) => {
  if (contentType) {
    let listContentType = contentType.split('/');
    return listContentType[1];
  }
  return '';
};

export const concatAccumulator = (acc, val) => {
  return acc?.length > 0 ? acc.concat(', ', val) : acc.concat(val);
};

export const getExtensionsUpload = (accept = '', isGif: boolean = true) => {
  let imageExtensions = isGif
    ? ACCEPT_TYPE.image
    : '.png, .jpg, .jpeg, .jfif, .dms';
  let videoExtensions = ACCEPT_TYPE.video;
  let audioExtensions = ACCEPT_TYPE.audio;

  if (accept?.length) {
    let listAcceptType = accept
      .split(',')
      .map((val) => val.split('/'))
      .flat(1)
      .filter((val) => val !== '*');

    let result = listAcceptType.reduce((extensions, currentValue) => {
      return trim(currentValue) === 'image'
        ? concatAccumulator(extensions, imageExtensions)
        : trim(currentValue) === 'video'
          ? concatAccumulator(extensions, videoExtensions)
          : concatAccumulator(extensions, audioExtensions);
    }, '');
    return result;
  }
  return '';
};

export const getAvatarUrl = (avatar, size) => {
  switch (size) {
    case 'small':
      return avatar.cdnSmall ?? avatar.cdnOrigin ?? avatar.url ?? '';
    case 'medium':
      return avatar.cdnMedium ?? avatar.cdnOrigin ?? avatar.url ?? '';
    case 'large':
      return avatar.cdnLarge ?? avatar.cdnOrigin ?? avatar.url ?? '';
    default:
      return avatar.cdnOrigin ?? avatar.url ?? avatar.cdnLarge ?? '';
  }
};

export const validateFileType = (file) => {
  let fileTail = getFileTail(file.contentType);
  let fileType = getFileType(file.contentType);

  if (fileType !== 'video' || fileType !== 'image') {
    return {
      code: 'file-invalid-extension',
      message: `${file.path} has an invalid extension. Valid extension(s): video/* or image/*`,
    };
  }

  return null;
};

export const limitHtml = (text, limit) => {
  const changedString = String(text).replace(/<[^>]+>/gm, '');
  return changedString?.length > limit
    ? changedString.substr(0, limit - 1) + ' ...'
    : changedString;
};

export const slugUrl = (str) => {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

export const removeHtmlTag = (str) => {
  return str?.length > 0 ? str.replace(/<[^>]*>?/gm, '') : '';
  // return str;
};

export const firstSentence = (text) => {
  return text.substr(0, text.indexOf('.')) + '.';
};

export const suffix = (i) => {
  if (!i || isNaN(parseInt(i))) {
    return i;
  }
  let j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + 'st';
  }
  if (j === 2 && k !== 12) {
    return i + 'nd';
  }
  if (j === 3 && k !== 13) {
    return i + 'rd';
  }
  return i + 'th';
};

export const convertTime = (timestamp) => {
  const current = new Date().getTime();

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - timestamp;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
  } else if (elapsed < msPerYear) {
    return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
  } else {
    return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
  }
};

export const getUrlParameter = (name: string, currentLocation: string) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(currentLocation || location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export function buildUrlWithParams(url, params, removeEncode?: boolean) {
  let ret = '';
  if (isEmpty(params)) return url;
  url += '?';
  for (var d in params) {
    if (params[d] || params[d] === 0) {
      if (removeEncode) {
        ret += d + '=' + params[d] + '&';
      } else {
        // if (isArray(params[d])) {
        //   forEach(params[d], (item) => {
        //     ret += encodeURIComponent(d) + '=' + encodeURIComponent(item) + '&';
        //   });
        // } else {
        ret +=
          encodeURIComponent(d) + '=' + encodeURIComponent(params[d]) + '&';
        // }
      }
    }
  }
  ret = ret.replace(/&$/, '');
  return url + ret;
}

export const getMediaType = (file) => {
  if (startsWith(file.type, 'video')) return MEDIA_TYPE['VIDEO'];
  if (startsWith(file.type, 'audio')) return MEDIA_TYPE['AUDIO'];
  if (startsWith(file.type, 'image') || file.name.includes('.heic'))
    return MEDIA_TYPE['PHOTO'];
  return MEDIA_TYPE['DOCUMENT'];
};

export const getMediaUploadDir = (file) => {
  if (startsWith(file.type, 'video')) return 'video';
  if (startsWith(file.type, 'audio')) return 'audio';
  if (startsWith(file.type, 'image') || file.name.includes('.heic'))
    return 'image';
  return 'document';
};

const resizedataURL = (datas, wantedWidth, wantedHeight) => {
  return new Promise(async function (resolve, reject) {
    // We create an image to receive the Data URI
    var img = document.createElement('img');

    // When the event "onload" is triggered we can resize the image.
    img.onload = function () {
      // We create a canvas and get its context.
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');

      // We set the dimensions at the wanted size.
      canvas.width = wantedWidth;
      canvas.height = wantedHeight;

      // We resize the image with the canvas method drawImage();
      ctx.drawImage(img, 0, 0, wantedWidth, wantedHeight);

      var dataURI = canvas.toDataURL();

      // This is the return of the Promise
      resolve(dataURI);
    };

    // We put the Data URI in the image's src attribute
    img.src = datas;
  });
};

export const toBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      var img = new Image();
      img.onload = function () {
        var max = 400;
        var width = max;
        var height = (img.height / img.width) * max;
        resizedataURL(reader.result, width, height).then((resp) => {
          resolve(resp);
        });
      };
      img.src = reader.result as string;
    };
    reader.onerror = (error) => reject(error);
  });
};

export const getOrientation = async (file) => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();

    reader.onload = function (event) {
      var view = new DataView(event.target.result as ArrayBuffer);

      if (view.getUint16(0, false) != 0xffd8) resolve(-2);

      var length = view.byteLength,
        offset = 2;

      while (offset < length) {
        var marker = view.getUint16(offset, false);
        offset += 2;

        if (marker == 0xffe1) {
          if (view.getUint32((offset += 2), false) != 0x45786966) {
            resolve(-1);
          }
          var little = view.getUint16((offset += 6), false) == 0x4949;
          offset += view.getUint32(offset + 4, little);
          var tags = view.getUint16(offset, little);
          offset += 2;

          for (var i = 0; i < tags; i++)
            if (view.getUint16(offset + i * 12, little) == 0x0112)
              resolve(view.getUint16(offset + i * 12 + 8, little));
        } else if ((marker & 0xff00) != 0xff00) break;
        else offset += view.getUint16(offset, false);
      }
      resolve(-1);
    };

    reader.onerror = (error) => reject(error);

    reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
  });
};

export const resetOrientation = async (srcBase64, srcOrientation) => {
  return new Promise((resolve, reject) => {
    var img = new Image();

    img.onload = function () {
      var width = img.width,
        height = img.height,
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

      var actualWidth, actualHeight;
      if (4 < srcOrientation && srcOrientation < 9) {
        actualWidth = height;
        actualHeight = width;
      } else {
        actualWidth = width;
        actualHeight = height;
      }
      canvas.width = actualWidth;
      canvas.height = actualHeight;

      // transform context before drawing image
      switch (srcOrientation) {
        case 2:
          ctx.transform(-1, 0, 0, 1, width, 0);
          break;
        case 3:
          ctx.transform(-1, 0, 0, -1, width, height);
          break;
        case 4:
          ctx.transform(1, 0, 0, -1, 0, height);
          break;
        case 5:
          ctx.transform(0, 1, 1, 0, 0, 0);
          break;
        case 6:
          ctx.transform(0, 1, -1, 0, height, 0);
          break;
        case 7:
          ctx.transform(0, -1, -1, 0, height, width);
          break;
        case 8:
          ctx.transform(0, -1, 1, 0, 0, width);
          break;
        default:
          break;
      }

      // draw image
      ctx.drawImage(img, 0, 0);
      var data = canvas.toDataURL();

      // export base64
      resolve(data);
    };

    img.onerror = (error) => reject(error);

    img.src = srcBase64;
  });
};

export const getImagePreview = async (file) => {
  try {
    const srcOrientation = await getOrientation(file);
    const srcBase64 = await toBase64(file);
    const base64Data = await resetOrientation(srcBase64, srcOrientation);
    return base64Data;
  } catch { }
};

export const formatNumberToString = (n) => {
  if (isNaN(n)) return n;
  let ranges = [
    { divider: 1e18, suffix: 'E' },
    { divider: 1e15, suffix: 'P' },
    { divider: 1e12, suffix: 'T' },
    { divider: 1e9, suffix: 'G' },
    { divider: 1e6, suffix: 'M' },
    { divider: 1e3, suffix: 'k' },
  ];

  for (var i = 0; i < ranges?.length; i++) {
    if (n >= ranges[i].divider) {
      return (n / ranges[i].divider).toFixed(1).toString() + ranges[i].suffix;
    }
  }
  return n.toString();
};

export const formatNumber = (n, d = 1) => {
  if (isNaN(n)) return n;
  d = Math.pow(10, d);
  let abbrev = ['K', 'M', 'B', 'T'];
  for (let i = abbrev?.length - 1; i >= 0; i--) {
    let size = Math.pow(10, (i + 1) * 3);
    if (size <= n) {
      n = Math.round((n * d) / size) / d;
      if (n == 1000 && i < abbrev?.length - 1) {
        n = 1;
        i++;
      }
      n += abbrev[i];
      break;
    }
  }
  return n;
};

export const getCurrency = (money) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return money === 0 ? 0 : formatter.format(money);
};

export const getEntriesNumber = (pageSize, pageIndex, totalItems) => {
  if (pageSize > totalItems || pageSize * (pageIndex + 1) > totalItems) {
    return totalItems;
  } else {
    return pageSize * (pageIndex + 1);
  }
};

export const numberFormatter = (num, digits) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
};

export const onConvertContent = async (content, allowImageValue?) => {
  // 1. remove  Mso classes
  var stringStripper = new RegExp('(\r|\t| class=(")?Mso[a-zA-Z]+(")?)', 'g');
  var output = content.replace(stringStripper, ' ');
  // replace line breaks \n = <br/>
  var stringLineBreaks = new RegExp('(\n)', 'g');
  var output = output.replace(stringLineBreaks, '<br/>');
  // 2. strip Word generated HTML comments
  var commentSripper = new RegExp('<!--(.*?)-->', 'g');
  var output = output.replace(commentSripper, '');
  var tagStripper = new RegExp(
    '<(/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>',
    'gi'
  );
  // 3. remove tags leave content if any
  output = output.replace(tagStripper, '');
  // remove image if not allowImage
  if (!allowImageValue) {
    output = output.replace(/<img .*?>/g, '');
  }
  // 4. Remove everything in between and including tags '<style(.)style(.)>'
  var badTags = ['style', 'script', 'applet', 'embed', 'noframes', 'noscript'];

  for (var i = 0; i < badTags?.length; i++) {
    tagStripper = new RegExp(
      '<' + badTags[i] + '.*?' + badTags[i] + '(.*?)>',
      'gi'
    );
    output = output.replace(tagStripper, '');
  }
  // 5. remove attributes ' style="..."'
  var badAttributes = ['style', 'start'];
  for (var i = 0; i < badAttributes?.length; i++) {
    var attributeStripper = new RegExp(
      ' ' + badAttributes[i] + '="(.*?)"',
      'gi'
    );
    output = output.replace(attributeStripper, '');
  }
  return output;
};

// input: name, val
// get old value
// swwitcase, for, if...else
// set value

export const changeSocialConnectStatus = (name: string, value: boolean) => {
  const ekoUser = reactLocalStorage.getObject(Config.USER_KEY, {});
  let socialAccess = ekoUser.socialStatuses;

  socialAccess.forEach((social, index) => {
    if (social?.name === name) {
      ekoUser.socialStatuses[index].status = value;
    }
  });

  reactLocalStorage.setObject(Config.USER_KEY, ekoUser);
};

export const convertDataCriket = (results: any, inningsCount: number) => {
  const wickets = results?.innings[0]?.total?.wickets;
  const runScored = results?.innings[0]?.total?.runsScored;
  const overs = results?.innings[0]?.total?.overs;
  const declared = results?.innings[1]?.declared;

  const wicketsSecond = results?.innings[1]?.total?.wickets;
  const runScoredSecond = results?.innings[1]?.total?.runsScored;

  let convertResult = [];

  if (inningsCount <= 2) {
    if (wickets != 10) {
      convertResult[0] = wickets;
      convertResult[1] = runScored;
      convertResult[2] = overs;
    } else {
      convertResult[0] = runScored;
      convertResult[1] = null;
      convertResult[2] = overs;
    }
  } else {
    if (declared == 1) {
      convertResult[0] = `${wickets}d`;
      convertResult[1] = runScored;
      convertResult[2] = `${wicketsSecond}d`;
      convertResult[3] = runScoredSecond;
    } else if (declared == 0) {
      convertResult[0] = wickets;
      convertResult[1] = runScored;
      convertResult[2] = wicketsSecond;
      convertResult[3] = runScoredSecond;
    }
  }

  return convertResult;
};

const getMobileDetect = (userAgent: NavigatorID['userAgent']) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i));
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i));
  const isSSR = () => Boolean(userAgent.match(/SSR/i));
  const isMobile = () =>
    Boolean(isAndroid() || isIos() || isOpera() || isWindows());
  const isDesktop = () => Boolean(!isMobile() && !isSSR());
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
  };
};
export const useMobileDetect = () => {
  useEffect(() => { }, []);
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  return getMobileDetect(userAgent);
};

export const setHttp = (link) => {
  if (link && link.search(/^http[s]?\:\/\//) == -1) {
    link = 'http://' + link;
  }
  return link ?? '';
};

const censorWord = (str: string) => {
  return "*".repeat(str.length);
}

export const censorEmail = (email: string) => {
  const splitEmail = email.split('@');
  return splitEmail[0] + censorWord(splitEmail[1]);
}
