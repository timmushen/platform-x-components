import Vue from "vue";

// Base
import XTest from "./components/XTest";
import XAlert from "./components/XAlert";
import XAuthor from "./components/XAuthor";
import XAvatar from "./components/XAvatar";
import XBadge from "./components/XBadge";
import XButton from "./components/XButton";
import XCallOut from "./components/XCallOut";
import XCard from "./components/XCard";
import XContent from "./components/XContent";
import XEventCard from "./components/XEventCard";
import XFooter from "./components/XFooter";
import XHeader from "./components/XHeader";
import XHeaderButton from "./components/XHeaderButton";
import XHr from "./components/XHr";
import XIconWidget from "./components/XIconWidget";
import XNavBrand from "./components/XNavBrand";
import XNavItem from "./components/XNavItem";
import XNotificationCircle from "./components/XNotificationCircle";
import XPill from "./components/XPill";
import XProfileCard from "./components/XProfileCard";
import XSection from "./components/XSection";
import XSideNav from "./components/XSideNav";
import XTabs from "./components/XTabs";
import XTimeline from "./components/XTimeline";
import XTimelineItem from "./components/XTimelineItem";
import XTitle from "./components/XTitle";

// Forms
import ResizableTextarea from "./components/Forms/ResizableTextarea";
import XCheckbox from "./components/Forms/XCheckbox";
import XInput from "./components/Forms/XInput";
import XLoginForm from "./components/Forms/XLoginForm";
import XSelect from "./components/Forms/XSelect";
import XSubmitButton from "./components/Forms/XSubmitButton";
import XTextarea from "./components/Forms/XTextarea";

export default {
  install(Vue) {
    // Base
    Vue.component("XTest", XTest);
    Vue.component("XAlert", XAlert);
    Vue.component("XAuthor", XAuthor);
    Vue.component("XAvatar", XAvatar);
    Vue.component("XBadge", XBadge);
    Vue.component("XButton", XButton);
    Vue.component("XCallOut", XCallOut);
    Vue.component("XCard", XCard);
    Vue.component("XContent", XContent);
    Vue.component("XEventCard", XEventCard);
    Vue.component("XFooter", XFooter);
    Vue.component("XHeader", XHeader);
    Vue.component("XHeaderButton", XHeaderButton);
    Vue.component("XHr", XHr);
    Vue.component("XIconWidget", XIconWidget);
    Vue.component("XNavBrand", XNavBrand);
    Vue.component("XNavItem", XNavItem);
    Vue.component("XNotificationCircle", XNotificationCircle);
    Vue.component("XPill", XPill);
    Vue.component("XProfileCard", XProfileCard);
    Vue.component("XSection", XSection);
    Vue.component("XSideNav", XSideNav);
    Vue.component("XTabs", XTabs);
    Vue.component("XTimeline", XTimeline);
    Vue.component("XTimelineItem", XTimelineItem);
    Vue.component("XTitle", XTitle);

    // Forms
    Vue.component("ResizableTextarea", ResizableTextarea);
    Vue.component("XCheckbox", XCheckbox);
    Vue.component("XInput", XInput);
    Vue.component("XLoginForm", XLoginForm);
    Vue.component("XSelect", XSelect);
    Vue.component("XSubmitButton", XSubmitButton);
    Vue.component("XTextarea", XTextarea);
  }
};

export {
  XTest,
  XAlert,
  XAuthor,
  XAvatar,
  XBadge,
  XButton,
  XCallOut,
  XEventCard,
  XFooter,
  XHeader,
  XHeaderButton,
  XHr,
  XIconWidget,
  XNavBrand,
  XNavItem,
  XNotificationCircle,
  XPill,
  XProfileCard,
  XSection,
  XSideNav,
  XTabs,
  XTimeline,
  XTimelineItem,
  XTitle,
  ResizableTextarea,
  XCheckbox,
  XInput,
  XLoginForm,
  XSelect,
  XSubmitButton,
  XTextarea
};
