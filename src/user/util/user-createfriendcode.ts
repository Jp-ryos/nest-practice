function createFriendCode(): string {
  let result: string = '';

  for (let i: number = 0; i < 12; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}