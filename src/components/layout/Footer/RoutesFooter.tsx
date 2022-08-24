
import {
  IconTwitter,
  IconPhoneCall,
  IconEmail,
  CHPlayStore,
  AppStore,
  IconFacebook,
  IconYoutube,
  IconInstagram,
} from 'public/icons';
import { IconCompany } from './Footer.style';

export const RoutesContact = [
  {
    icon: <IconCompany />,
    name: 'address',
    dynamic:true,
    href: (obj?:{})=> "https://www.google.com/maps/search/" + obj['address'],
  },
  { icon: <IconPhoneCall />, name: 'hotline',dynamic:true, href:(obj?:{})=>"tel:" + obj['hotline']},
  { icon: <IconEmail />, name: 'support@mail.vn', href:(obj?:{})=> 'mailto:support@mail.vn' },
];

export const RoutesApps = [
  { icon: <AppStore />, name: 'AppStore', href: 'appStoreLink',dynamic:true },
  { icon: <CHPlayStore />, name: 'Ch play', href: 'playStoreLink',dynamic:true },
];

export const RoutesSocials = [
  { icon: <IconFacebook />, name: 'Facebook', href: 'facebookLink',dynamic:true },
  { icon: <IconTwitter />, name: 'Twitter', href: 'twitterLink' ,dynamic:true},
  { icon: <IconYoutube />, name: 'Youtube', href: 'youtubeLink' ,dynamic:true},
  { icon: <IconInstagram />, name: 'Instagram', href: 'instagramLink' ,dynamic:true},
];
