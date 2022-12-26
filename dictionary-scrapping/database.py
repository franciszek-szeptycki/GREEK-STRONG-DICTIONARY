import sqlite3


def save_in_db(data):

    db = sqlite3.connect("../strong-dict.db")
    cursor = db.cursor()

    try:
        cursor.execute('''
        
            DROP TABLE strong_dictionary
        
        ''')
        db.commit()
    except:
        pass
    finally:
        cursor.execute('''
                CREATE TABLE strong_dictionary (
                    id integer,
                    latin_alpha string,
                    greek_alpha string,
                    length integer)
            ''')
        db.commit()

    for item in data:
        print(item.index_strong, item.greek_word, item.orthodox, item.length)

        cursor.execute(f'''
            INSERT INTO strong_dictionary (id, latin_alpha, greek_alpha, length) VALUES ({item.index_strong}, "{item.greek_word}", "{item.orthodox}", {item.length})
        ''')

        db.commit()

    db.close()
