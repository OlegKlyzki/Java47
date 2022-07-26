export const start = 'start';
export const game = 'game';
export const result = 'result';

class CardItem {
	constructor(cardType, cardSuit, cardValue) {
		this.cardType = cardType;
		this.cardSuit = cardSuit;
		this.cardValue = cardValue;
	}
}

export const cardsDeck = [];
export const cardsTypes = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
export const cardsSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
export const cardsValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

for (let i = 0; i < cardsSuits.length; i++) {
	for (let j = 0; j < cardsTypes.length; j++) {
		cardsDeck.push(new CardItem(cardsTypes[j], cardsSuits[i], cardsValues[j]))
	}
}

export const cardsComputer = [];
export const cardsUser = [];

export const getCardsComputer = () => {
	for (let i = 0; i < cardsDeck.length / 2; i++) {
		let rand = Math.floor(Math.random() * cardsDeck.length / 2)
		cardsComputer.push(cardsDeck[rand]);
	}
	return cardsComputer;
	
}

export const getCardsUser = () => {
	for (let i = 0; i < cardsDeck.length / 2; i++) {
		let rand = Math.floor(Math.random() * cardsDeck.length / 2)
		cardsUser.push(cardsDeck[rand]);
	}
	return cardsUser;
}








