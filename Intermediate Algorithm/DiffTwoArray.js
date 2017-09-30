var arr1 = [1,2,3,4,5];
var arr2 = [1,2,4,6,2];
function Diff(arr1,arr2) {
    var newArr = [];
    var newArr1 = [];
    newArr = arr1.contact(arr2);
    for (var index = 0; index < newArr.length; index++) {
        var element = newArr[index];
        if (newArr.slice(index).indexOf(element) == -1) {
            newArr1.push(element);
        }
    }
    return newArr1;
}