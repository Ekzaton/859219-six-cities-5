import {RootState} from "../index";
import {Offer} from "../../components/types";

export const selectOffers = (state: RootState): Offer[] => state.data.offers;

