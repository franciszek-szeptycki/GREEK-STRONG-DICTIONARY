from bs4 import BeautifulSoup
import requests
from class_template import Page
from database import save_in_db


def main():
    dict_strong = []
    html_doc = requests.get("http://biblia-online.pl/Slownik/Biblijny/JamesStrongGreek")
    soup = BeautifulSoup(html_doc.text, 'html.parser')

    menu = soup.find("div", class_="btn-group")

    for link in menu.find_all('a'):
        page = Page(link.get('href')).result

        for index in page:
            dict_strong.append(index)

    save_in_db(dict_strong)


if __name__ == '__main__':
    main()
