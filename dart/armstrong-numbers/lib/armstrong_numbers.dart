class ArmstrongNumbers {
  bool isArmstrongNumber(String number) {
    var sum = BigInt.zero;

    number.split('').map((e) => BigInt.parse(e)).forEach((element) {
      sum += element.pow(number.length);
    });

    return sum.toString() == number;
  }
}
