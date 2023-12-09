import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51OLRRBSGwjiU8YLocwP3U8mC4TvbRUoDPJvRayraOz0AKWcYkf3CSZQP7aNeNTA6IeqUX9B0WCzhCJ91sSM0Dl8w00cD4YoG7B');
  }

  return stripePromise;
}

export default getStripe;