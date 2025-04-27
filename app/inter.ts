import { Dispatch, SetStateAction, useEffect, useRef } from "react";
const useInter = (setAciveId: Dispatch<SetStateAction<string>>) => {
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAciveId(entry.target.id);
          }
        });
      },
      { threshold: 0.75 }
    );
    const { current: currentObserver } = observer;
    const elements = document.querySelectorAll(".bigSections");
    elements.forEach((element) => {
      currentObserver.observe(element);
    });
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [setAciveId]);
};

export default useInter;
