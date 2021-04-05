function didThyWin(element, index, array) {
    if (element.result == 'W') {
        return true;
    }
  }

function superbowlWin(array) {
    let result = array.find(didThyWin)
    if (result != undefined) {
        result = result.year
    }
    return result
}