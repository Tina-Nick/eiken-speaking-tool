const grade3_questions = [
  {
    question: "Do you like sports?",
    translation: "スポーツは好きですか？",
    answers: {
      yes: "Yes. I like sports because they keep me healthy and happy.",
      no: "No. I don’t like sports because I’m not good at them."
    },
    answerTranslations: {
      yes: "はい。スポーツは健康で幸せにしてくれるから好きです。",
      no: "いいえ。スポーツは苦手なので好きではありません。"
    }
  },
  {
    question: "Do you like reading books?",
    translation: "本を読むのは好きですか？",
    answers: {
      yes: "Yes. Reading books helps me learn new things and relax.",
      no: "No. I prefer watching movies or playing games."
    },
    answerTranslations: {
      yes: "はい。本を読むと新しいことが学べてリラックスできます。",
      no: "いいえ。映画を見たりゲームをしたりする方が好きです。"
    }
  },
  {
    question: "Do you like watching movies?",
    translation: "映画を見るのは好きですか？",
    answers: {
      yes: "Yes. I enjoy watching movies in my free time.",
      no: "No. I prefer reading books or playing outside."
    },
    answerTranslations: {
      yes: "はい。自由な時間に映画を見るのが好きです。",
      no: "いいえ。本を読んだり外で遊んだりする方が好きです。"
    }
  },
  {
    question: "Do you like animals?",
    translation: "動物は好きですか？",
    answers: {
      yes: "Yes. Animals are cute and fun to be with.",
      no: "No. I am not interested in animals."
    },
    answerTranslations: {
      yes: "はい。動物はかわいくて一緒にいると楽しいです。",
      no: "いいえ。動物にはあまり興味がありません。"
    }
  },
  {
    question: "Do you like to eat vegetables?",
    translation: "野菜は食べるのが好きですか？",
    answers: {
      yes: "Yes. Vegetables are healthy and tasty.",
      no: "No. I prefer to eat meat and sweets."
    },
    answerTranslations: {
      yes: "はい。野菜は健康に良くておいしいです。",
      no: "いいえ。肉やお菓子の方が好きです。"
    }
  },
  {
    question: "Do you like to play video games?",
    translation: "テレビゲームをするのは好きですか？",
    answers: {
      yes: "Yes. Playing games is fun and exciting.",
      no: "No. I prefer playing sports or reading."
    },
    answerTranslations: {
      yes: "はい。ゲームをするのは楽しくてわくわくします。",
      no: "いいえ。スポーツや読書の方が好きです。"
    }
  },
  {
    question: "Do you like listening to music?",
    translation: "音楽を聴くのは好きですか？",
    answers: {
      yes: "Yes. Music makes me happy and relaxed.",
      no: "No. I don’t listen to music often."
    },
    answerTranslations: {
      yes: "はい。音楽を聴くと幸せでリラックスできます。",
      no: "いいえ。あまり音楽を聴きません。"
    }
  },
  {
    question: "Do you like to travel?",
    translation: "旅行するのは好きですか？",
    answers: {
      yes: "Yes. Traveling helps me learn new things.",
      no: "No. I prefer to stay at home."
    },
    answerTranslations: {
      yes: "はい。旅行すると新しいことが学べます。",
      no: "いいえ。家にいる方が好きです。"
    }
  },
  {
    question: "Do you like swimming?",
    translation: "泳ぐのは好きですか？",
    answers: {
      yes: "Yes. Swimming is fun and good exercise.",
      no: "No. I am afraid of water."
    },
    answerTranslations: {
      yes: "はい。泳ぐのは楽しくて良い運動です。",
      no: "いいえ。水が怖いです。"
    }
  },
  {
    question: "Do you like going to school?",
    translation: "学校に行くのは好きですか？",
    answers: {
      yes: "Yes. I like seeing my friends and learning new things.",
      no: "No. I don’t like school because it’s hard sometimes."
    },
    answerTranslations: {
      yes: "はい。友だちに会ったり新しいことを学んだりするのが好きです。",
      no: "いいえ。学校は時々難しいので好きではありません。"
    }
  },
  {
    question: "Do you like helping your family?",
    translation: "家族の手伝いをするのは好きですか？",
    answers: {
      yes: "Yes. I like helping my family because it is important.",
      no: "No. I don’t like doing chores."
    },
    answerTranslations: {
      yes: "はい。家族の手伝いは大切なので好きです。",
      no: "いいえ。家事をするのは好きではありません。"
    }
  },
  {
    question: "Do you like eating sweets?",
    translation: "甘いものを食べるのは好きですか？",
    answers: {
      yes: "Yes. Sweets are delicious and fun to eat.",
      no: "No. I prefer healthy food."
    },
    answerTranslations: {
      yes: "はい。甘いものはおいしくて楽しいです。",
      no: "いいえ。健康的な食べ物が好きです。"
    }
  },
  {
    question: "Do you like watching TV?",
    translation: "テレビを見るのは好きですか？",
    answers: {
      yes: "Yes. Watching TV is relaxing.",
      no: "No. I prefer to read books."
    },
    answerTranslations: {
      yes: "はい。テレビを見るとリラックスできます。",
      no: "いいえ。本を読む方が好きです。"
    }
  },
  {
    question: "Do you like riding a bike?",
    translation: "自転車に乗るのは好きですか？",
    answers: {
      yes: "Yes. Riding a bike is fun and good exercise.",
      no: "No. I don’t like riding a bike."
    },
    answerTranslations: {
      yes: "はい。自転車に乗るのは楽しくて良い運動です。",
      no: "いいえ。自転車に乗るのは好きではありません。"
    }
  },
  {
    question: "Do you like drawing pictures?",
    translation: "絵を描くのは好きですか？",
    answers: {
      yes: "Yes. Drawing helps me relax and be creative.",
      no: "No. I am not good at drawing."
    },
    answerTranslations: {
      yes: "はい。絵を描くとリラックスできて創造的になれます。",
      no: "いいえ。絵を描くのは得意ではありません。"
    }
  },
  {
    question: "Do you like to clean your room?",
    translation: "自分の部屋を掃除するのは好きですか？",
    answers: {
      yes: "Yes. Cleaning makes my room nice and comfortable.",
      no: "No. I don’t like cleaning."
    },
    answerTranslations: {
      yes: "はい。掃除すると部屋がきれいで快適になります。",
      no: "いいえ。掃除は好きではありません。"
    }
  },
  {
    question: "Do you like to listen to stories?",
    translation: "お話を聞くのは好きですか？",
    answers: {
      yes: "Yes. I like listening to stories because they are interesting.",
      no: "No. I prefer to read stories myself."
    },
    answerTranslations: {
      yes: "はい。お話は面白いので聞くのが好きです。",
      no: "いいえ。自分で読む方が好きです。"
    }
  },
  {
    question: "Do you like going to the park?",
    translation: "公園に行くのは好きですか？",
    answers: {
      yes: "Yes. Going to the park is fun and relaxing.",
      no: "No. I prefer staying at home."
    },
    answerTranslations: {
      yes: "はい。公園に行くのは楽しくてリラックスできます。",
      no: "いいえ。家にいる方が好きです。"
    }
  },
  {
    question: "Do you like playing with your friends?",
    translation: "友だちと遊ぶのは好きですか？",
    answers: {
      yes: "Yes. Playing with friends is fun and makes me happy.",
      no: "No. I prefer to play alone."
    },
    answerTranslations: {
      yes: "はい。友だちと遊ぶのは楽しくて幸せです。",
      no: "いいえ。一人で遊ぶ方が好きです。"
    }
  },
  {
    question: "Do you like eating breakfast?",
    translation: "朝ごはんを食べるのは好きですか？",
    answers: {
      yes: "Yes. Eating breakfast gives me energy for the day.",
      no: "No. I don’t feel hungry in the morning."
    },
    answerTranslations: {
      yes: "はい。朝ごはんを食べると一日元気に過ごせます。",
      no: "いいえ。朝はあまりお腹が空きません。"
    }
  }
];
