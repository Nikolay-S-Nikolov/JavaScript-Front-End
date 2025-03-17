function comments(inputArr) {
    let comentsObj = {};
    let userList = [];
    let articleList = [];

    for (let info of inputArr) {

        if (info.includes('user')) {
            userList.push(info.split('user ')[1]);

        } else if (info.includes('article')) {
            articleList.push(info.split('article ')[1]);

        } else if (info.includes('posts on')) {
            let [name, info1] = info.split(' posts on ');

            if (userList.includes(name)) {
                let [article, info2] = info1.split(': ');

                if (articleList.includes(article)) {
                    if (!(article in comentsObj)) {
                        comentsObj[article] = [];
                    }
                    comentsObj[article].push([
                        name,
                        info2.split(', ')[0],
                        info2.split(', ')[1]
                    ]);
                }
            }
        }
    }

    let sortedComments = Object.entries(comentsObj).sort(
        (a, b) => b[1].length - a[1].length
    );

    for (let [sortedArticle, info3] of sortedComments) {

        console.log(`Comments on ${sortedArticle}`);
        info3 = info3.sort((a,b)=>b[1].localeCompare(a[1]));

        for (let [username, commentTitle, commentContent] of info3) {
            console.log(`--- From user ${username}: ${commentTitle} - ${commentContent}`);
        }
    }
}

// comments(['user aUser123',
//     'someUser posts on someArticle: NoTitle, stupidComment',
//     'article Books', 'article Movies', 'article Shopping',
//     'user someUser', 'user uSeR4', 'user lastUser',
//     'uSeR4 posts on Books: I like books, I do really like them',
//     'uSeR4 posts on Movies: I also like movies, I really do',
//     'someUser posts on Shopping: title, I go shopping every day',
//     'someUser posts on Movies: Like, I also like movies very much'])