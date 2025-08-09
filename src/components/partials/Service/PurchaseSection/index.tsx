import React from 'react';
import BuyCard from './BuyCard';
import CompletionCard from './CompleteCard';
import ServiceDetail from '../../Game/ServiceDetail';
import { serviceDescription } from '@/utils/consts';
import ApplePay from '@public/payment/apple-pay';
import Epoch from '@public/payment/epoch';
import GooglePay from '@public/payment/google-pay';
import Ideal from '@public/payment/ideal';
import PayPal from '@public/payment/pay-pal';
import Sezzle from '@public/payment/sezzle';
import Skrill from '@public/payment/skrill';
import Visa from '@public/payment/visa';
import BitCoint from '@public/payment/bitcoin';
import EPS from '@public/payment/eps';
import Inxy from '@public/payment/inxy_payment';
import MasterCard from '@public/payment/mastercard';

const PurchaseSection = () => (
  <div className="mr-margin ml-margin lg:ml-0 md:min-w-1/2 mt-4 lg:mt-0">
    <div className="lg:sticky top-4 flex justify-between flex-col xl:flex-row gap-4 md:gap-8 px-margin md:p-10 py-8 bg-secondary rounded-4xl mt-8 md:mt-0">
      <BuyCard />
      <div>
        <CompletionCard />
        <PaymentLogo />
      </div>
    </div>
    <ServiceDetail
      content={serviceDescription}
      className="lg:hidden bg-transparent [&_h3]:text-xl [&_h3]:mb-4 [&_li]:mb-4 md:px-0 pt-0 px-0"
    />
  </div>
);

const PaymentLogo = () => {
  return (
    <div className="flex max-w-90 filter flex-wrap justify-center items-center gap-4 mt-4">
      <ApplePay width={38} />
      <BitCoint width={38} />
      <Epoch width={38} />
      <EPS width={38} />
      <GooglePay width={38} />
      <Ideal width={38} />
      <Inxy width={38} />
      <MasterCard width={38} />
      <PayPal width={66} />
      <Sezzle width={38} />
      <Skrill width={38} />
      <Visa width={38} />
    </div>
  );
};
export default PurchaseSection;
