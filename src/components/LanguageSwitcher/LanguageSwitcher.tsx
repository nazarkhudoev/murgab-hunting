"use client";


import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';

export default function LanguageSwitcher() {

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <select
      value={currentLocale}
      onChange={handleChange}
      className=" h-[26px] bg-white px-2 py-1 text-orange-600 rounded-[6px] flex-col items-center text-sm"
    >
      <option key="en" value="en">
        English
      </option>
      <option key="ru" value="ru">
        Русский
      </option>
    </select>
  );
}

// "use client";


// import { usePathname, useRouter } from "next/navigation";
// import { useLayoutEffect, useState, useTransition } from "react";
// import { useTranslation } from 'react-i18next';
// import i18nConfig from '@/i18nConfig';

// export default function LanguageSwitcher() {

//   const { i18n } = useTranslation();
  
//   const currentLocale = i18n.language;

//   const [currentLanguage, setCurrentLanguage] = useState<string>(currentLocale);
//   const currentPathname = usePathname();

//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();
//   const pathName = usePathname();

//   useLayoutEffect(() => {
//     const storedLang = (localStorage.getItem("lang")) || "en";
//     setCurrentLanguage(storedLang);
//   }, []);

//   const onLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const newLocale = event.target.value;

//     startTransition(() => {
//       router.replace(`/${newLocale}${pathName}`);
//     })
//     // router.replace(pathname, { locale: newLocale });
//     // console.log("newLocale", newLocale);
//     setCurrentLanguage(newLocale);
//     localStorage.setItem("lang", newLocale);


//         // set cookie for next-i18n-router
//     const days = 30;
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     const expires = date.toUTCString();
//     document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

//     // redirect to the new locale path
//     if (
//       currentLocale === i18nConfig.defaultLocale &&
//       !i18nConfig.prefixDefault
//     ) {
//       router.push('/' + newLocale + currentPathname);
//     } else {
//       router.push(
//         currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
//       );
//     }

//   };

//   return (
//     <select
//       value={currentLocale}
//       // defaultValue={localeActive}
//       onChange={onLocaleChange}
//       disabled={isPending}
//       className=" h-[26px] bg-white px-2 py-1 text-orange-600 rounded-[6px] flex-col items-center text-sm"
//     >
//         <option key={"ru"} value={"ru"}>
//           Русский
//         </option>
//         <option key={"en"} value={"en"}>
//           English
//         </option>
//     </select>
//   );
// }


