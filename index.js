const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// app.get('/download', async (req, res, next) => {
// 	try {
// 		var url = req.query.url;
// 		if(!ytdl.validateURL(url)) {
// 			return res.sendStatus(400);
// 		}
// 		let title = 'audio';

// 		await ytdl.getBasicInfo(url, {
// 			format: 'mp4'
// 		}, (err, info) => {
// 			if (err) throw err;
// 			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
// 		});

// 		res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
// 		ytdl(url, {
// 			format: 'mp3',
// 			filter: 'audioonly',
// 		}).pipe(res);
// 	} catch (err) {
// 		console.error(err);
// 	}
});