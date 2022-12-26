from bs4 import BeautifulSoup
import requests


def get_pronunciation(soup):
    label = soup.find_all("div", class_="row vtbl-row")
    pronunciation = label[9].find_all("div", class_="col-lg-6")[1].text
    return pronunciation


def get_examples(soup):
    label = soup.find_all("div", class_="col-lg-12 js-dict-desc")[1]
    examples = str(label).split(">")[1].split("<hr")[0].strip()
    return examples


def index_data(index):
    html_doc = requests.get(f"http://biblia-online.pl/Slownik/Biblijny/JamesStrongGreek/Strong/G{index}").text
    soup = BeautifulSoup(html_doc, 'html.parser')

    info = {
        "orthodox": soup.find("span", {"id": "stg-word"}).text,
        "pronunciation": get_pronunciation(soup),
        "definition": soup.find("div", class_="col-lg-12 js-dict-desc").text,
        "examples": get_examples(soup)
    }

    verses = []

    label = soup.find_all("div", class_="col-lg-12")[21]
    for row in label.find_all("div", class_="row"):
        verse = row.find("div", class_="col-lg-11 conc-word-vr verse-with-st")
        text = verse.text.split(" ")
        del text[len(text) - 1]
        del text[len(text) - 1]

        text = " ".join(text).split("KJV")[0]

        index = row.find("a", class_="pull-right").text

        verses.append({"text": text, "index": index})

    return info, verses
