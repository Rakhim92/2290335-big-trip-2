import { mockOffers } from '../mock/offers.js';
import { mockDestinations } from '../mock/destinations.js';
import { getRandomPoint } from '../mock/points.js';

const POINTS_COUNT = 3;

export default class PointModel {
  points = Array.from({length: POINTS_COUNT}, getRandomPoint);
  offers = mockOffers;
  destinations = mockDestinations;

  getAllPoints() {
    return this.points;
  }

  getAllOffers() {
    return this.offers;
  }

  getOffersByType(type) {
    const allOffers = this.getAllOffers();
    return allOffers.find((offer) => offer.type === type);
  }

  getOfferById(type, itemsId) {
    const offersType = this.getOffersByType(type);
    return offersType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }

  getDestination() {
    return this.destinations;
  }

  getDestinationById(id) {
    const allDestinations = this.getDestination();
    return allDestinations.find((item) => item.id === id);
  }
}
