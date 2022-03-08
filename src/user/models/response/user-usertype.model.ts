const UserTypeConst = {
  Normal: '1',
  Silver: '2',
  GoldUser: '3',
  Platinum: '4',
  Streamer: '5',
  Special: '6',
  Test: '7',
  NotAllocate: '8',
  Master: '9'
} as const;

type UserType = typeof UserTypeConst[keyof typeof UserTypeConst];

