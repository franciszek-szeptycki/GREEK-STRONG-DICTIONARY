from bs4 import BeautifulSoup
import requests
from greek_to_latin import greek_to_latin


class Counter:
    def __init__(self):
        self.number = 0

    def increase(self):
        percent_1 = f"{self.number / 293 * 100}".split(".")[0] + "%"
        self.number += 1
        percent_2 = f"{self.number / 293 * 100}".split(".")[0] + "%"
        if percent_1 != percent_2:
            print(percent_2)


counter = Counter()


class Index:
    def __init__(self, index_strong, greek_word):
        self.index_strong = index_strong[1:]
        self.greek_word = greek_to_latin(greek_word)
        self.orthodox = greek_word

    def __str__(self):
        return f'{self.index_strong} : "{self.greek_word}" / "{self.orthodox}"'


class Page:
    def __init__(self, path):
        self.url = "http://biblia-online.pl" + path
        self.path = path
        self.result = []
        self.run()

    def get_data(self):
        return self.result

    def run(self):
        while True:
            print(f"current page: {self.url}")
            counter.increase()

            html_doc = requests.get(self.url)
            soup = BeautifulSoup(html_doc.text, 'html.parser')

            labels = soup.find_all("div", class_="row vtbl-row vtbl-row js-gre-row")
            for label in labels:
                index_strong = label.find('div', class_='col-lg-1').get_text()
                greek_word = label.find('div', class_='col-lg-3 txt-gre').get_text()
                index = Index(index_strong=index_strong, greek_word=greek_word.lower())
                self.result.append(index)

            next_chapter = soup.find('ul', class_="pagination").find_all('a')[-1]["href"]

            if next_chapter == "javascript:void(0);":
                break
            else:
                self.url = next_chapter

def get_description(index):
    url = f"http://biblia-online.pl/Slownik/Biblijny/JamesStrongGreek/Strong/{index}"
    html_doc = requests.get(url)
    soup = BeautifulSoup(html_doc.text, 'html.parser')

    # print(soup)
    descript = soup.find_all('div', class_="col-lg-12 js-dict-desc")
    descript_1 = descript[0].get_text()
    descript_2 = descript[1].find_all('a')
    descript_2_0 = ""
    for definition in descript_2:
        descript_2_0 += f"{definition.get_text()} "
    return f"{descript_1}\n{descript_2_0}"