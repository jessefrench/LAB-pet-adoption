const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "Cat",
    imageUrl: "https://www.boredpanda.com/blog/wp-content/uploads/2014/12/green-cat-varna-bulgaria-11.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "Dino",
    imageUrl: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/a7d2f74bdbb6b00665c864d01edddf0f.jpg",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "Dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "Dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "Cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "Dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "Cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "Dino",
    imageUrl: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/c3f7adfb1ff7e20093fa458b18f8e2f7.jpg"
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "Cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "Cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "Dino",
    imageUrl: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/376ed3702cb6b6d7bc3ac30255b97ac9.jpg"
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "Dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "Dog",
    imageUrl: "https://wallpapers.com/images/hd/funny-dog-picture-vznfz9yqlvhukg0f.jpg"
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "Cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "Cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "Dino",
    imageUrl: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/0019116f2b5eb2197e0bd37b699f1bec.jpg"
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "Cat",
    imageUrl: "https://i.pinimg.com/736x/32/7e/db/327edb9a15b304efc264668ada03f725.jpg"
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "Dino",
    imageUrl: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/54427f9ad0e3b152fcad527f1eb16c82.jpg"
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "Dog",
    imageUrl: "https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1600x1066/gallery-1506709524-cola-0247.jpg?resize=640:*"
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "Cat",
    imageUrl: "https://www.foundanimals.org/wp-content/uploads/2023/02/twenty20_b4e89a76-af70-4567-b92a-9c3bbf335cb3.jpg"
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "Dino",
    imageUrl: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/18c72853a724640845c0fa9eebafd22e.jpg"
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "Cat",
    imageUrl: "https://www.inspiremore.com/wp-content/uploads/2022/12/funny-orange-cats-3-scaled.jpg"
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "Dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    type: "Dog",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/cute-labradoodle-dog-in-the-park-royalty-free-image-1699391675.jpg"
  },
  {
    id: 25,
    name: "Salem",
    color: "Black",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "Cat",
    imageUrl: "https://i.redd.it/h14pjp259s961.jpg"
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "Dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "Dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "Cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "Cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "Dino",
    imageUrl: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/0ea5a81f15bd7afb91e38f3d2d1501a7.jpg"
  }
]

// render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = htmlToRender
}

// get the cards on the DOM
const cardsOnDom = (pets) => {
  let domString = ""
  for (const pet of pets) {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${pet.name}</h5>
          <img src="${pet.imageUrl}" class="card-img" alt="${pet.type}">
          <p class="card-text">Color: ${pet.color}</p>
          <p class="card-text">Special skill: ${pet.specialSkill}</p>
          <p class="card-text">Type: ${pet.type}</p>
        </div>
      </div>`
  }
  renderToDom("#app", domString)
}

// render all cards on page load
cardsOnDom(pets)

// target pet type category buttons on the DOM
const catBtn = document.querySelector("#cat")
const dogBtn = document.querySelector("#dog")
const dinoBtn = document.querySelector("#dino")
const allBtn = document.querySelector("#all")

// add click events to filter pets of specific type
catBtn.addEventListener("click", (e) => {
  if (e.target.id.includes('cat')) {
    const filterPets = pets.filter((pet) => pet.type === 'Cat')
    cardsOnDom(filterPets)
  }
})

dogBtn.addEventListener("click", (e) => {
  if (e.target.id.includes('dog')) {
    const filterPets = pets.filter((pet) => pet.type === 'Dog')
    cardsOnDom(filterPets)
  }
})

dinoBtn.addEventListener("click", (e) => {
  if (e.target.id.includes('dino')) {
    const filterPets = pets.filter((pet) => pet.type === 'Dino')
    cardsOnDom(filterPets)
  }
})

allBtn.addEventListener("click", () => {
  cardsOnDom(pets)
})
