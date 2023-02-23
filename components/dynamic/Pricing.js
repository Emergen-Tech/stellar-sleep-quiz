import { moveToNextQuestion } from '@/reducers/QuizSlice';
import { useDispatch, useSelector } from 'react-redux';
import ExclusiveOffer from '../Pricing/ExclusiveOffer';
import PartnerAccess from '../Pricing/GetAccess';
import TrialPricing from '../Pricing/TrialPricing';

export default function Pricing() {
  const promo = useSelector((state) => state.quiz.promo);
  const dispatch = useDispatch();

  function handleNextPage() {
    dispatch(moveToNextQuestion());
  }

  return (
    <div>
      {(() => {
        switch (promo) {
          case 'SUMMERSALE':
          case 'ADWSPECIAL':
          case 'REDDITPROMO':
          case 'INSTAPROMO':
          case 'LINKEDIN30':
          case 'PINTEREST30':
          case 'APP30':
          case 'SUMMER30':
          case 'IOS30':
          case 'ANDROID30':
          case 'FALLSALE':
          case 'FB30':
          case 'BINGSPECIAL':
            return <TrialPricing />;
          case 'LIFETIMEACCESS':
            return <ExclusiveOffer />;
          case 'PARTNER33':
          case 'PARTNERS33':
            return <PartnerAccess />;
          default:
            handleNextPage();
            return null;
        }
      }).call()}
    </div>
  );
}
