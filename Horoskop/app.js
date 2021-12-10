let znamenia = {
  vodnar: {
    name: "AQUARIAS",
    image: "./images/Aquarius.svg",
    start: "21.01.",
    end: "19.02.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
  ryby: {
    name: "PISCES",
    image: "./images/Pisces.svg",
    start: "20.02.",
    end: "20.03.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
  baran: {
    name: "ARIES",
    image: "./images/Aries.svg",
    start: "21.03.",
    end: "20.04.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
  byk: {
    name: "TAURUS",
    image: "./images/Taurus.svg",
    start: "21.04.",
    end: "20.05.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
  blizenci: {
    name: "GEMINI",
    image: "./images/Gemini.svg",
    start: "21.05.",
    end: "21.06.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
  rak: {
    name: "CANCER",
    image: "./images/Cancer.svg",
    start: "22.06.",
    end: "22.07.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
  lev: {
    name: "LEO",
    image: "./images/Leo.svg",
    start: "23.07.",
    end: "22.08.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
  panna: {
    name: "VIRGO",
    image: "./images/Virgo.svg",
    start: "23.08.",
    end: "22.09.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
  vahy: {
    name: "LIBRA",
    image: "./images/Libra.svg",
    start: "23.09.",
    end: "22.10.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
  skorpion: {
    name: "SCORPIUS",
    image: "./images/Scorpio.svg",
    start: "23.10.",
    end: "22.11.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
  strelec: {
    name: "SAGITTARIUS",
    image: "./images/Sagittarius.svg",
    start: "23.11.",
    end: "21.12.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
  kozorozec: {
    name: "CAPRICORN",
    image: "./images/Capricorn.svg",
    start: "22.12.",
    end: "20.1.",
    popis:
      "V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
  },
};

function changeDateTime(event) {
  event.preventDefault();
  const birthday = document.getElementById("birthday").value;
  const znamenie = getZnamenie(new Date(birthday));
  document.querySelector(".horoskop-image img").src = znamenie.image;
  document.querySelector(".horoskop-sign").innerHTML = znamenie.name;
  document.querySelector(".custom-text").innerHTML = znamenie.popis;
}

function parseDate(date) {
  const parts = date.split(".");
  return new Date(`${parts[1]}-${parts[0]}-${1978}`);
}

function getZnamenie(date) {
  for (let key in znamenia) {
    const znamenie = znamenia[key];
    const start = parseDate(znamenie.start);
    const end = parseDate(znamenie.end);

    if ((date.getMonth() == start.getMonth() &&
        date.getDate() >= start.getDate()) ||
      (date.getMonth() == end.getMonth() && 
      date.getDate() <= end.getDate())) {
      return znamenie;
    }
    

  }
}
