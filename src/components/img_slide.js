function next (img_loc, imgarr, index) {
    img_loc[index] = img_loc[index] + 1;
    let loc = checklen(img_loc, imgarr, index);
    return {image_loc : loc, image: imgarr[loc]}
}

function prev (img_loc, imgarr, index) {
    img_loc[index] = img_loc[index] - 1;
    let loc = checklen(img_loc, imgarr, index);
    return {image_loc : loc, image: imgarr[loc]}
}


function checklen (img_loc, imgarr, index) {
    if (img_loc[index] > imgarr.length-1){
      img_loc[index] = 0
    } else if (img_loc[index]<0) {
      img_loc[index] = imgarr.length-1
    } else {
      img_loc[index] = img_loc[index]
    };
    return img_loc[index]
}

export {next, prev, checklen}