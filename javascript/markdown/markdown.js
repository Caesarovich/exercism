function parseDelimiter(markdown, delimiter, tag) {
	const pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
	const replacement = `<${tag}>$1</${tag}>`;
	return markdown.replace(pattern, replacement);
}

function parseStrong(markdown) {
	return parseDelimiter(markdown, "__", "strong");
}

function parseEm(markdown) {
	return parseDelimiter(markdown, "_", "em");
}

function wrapWithTag(text, tag) {
	return `<${tag}>${text}</${tag}>`;
}

function parseHeading(line) {
	let heading = 0;

	while (line[heading] === "#") {
		heading++;
	}

	if (heading > 0 && heading < 7) {
		return `${wrapWithTag(line.slice(heading).trim(), `h${Math.min(heading, 6)}`)}\n`;
	}
	return `${line}\n`;
}

function isHeading(line) {
	return line.startsWith("<h");
}

function isList(line) {
	return line.startsWith("<ul>");
}

function parseLine(line) {
	line = parseHeading(line);
	line = parseStrong(line);
	line = parseEm(line);
	return line;
}

function parseParagraphs(text) {
	const lines = text.split("\n");

	let newText = "";
	let currentParagraph = "";

	const pushCurrent = () => {
		if (currentParagraph.length > 0) {
			newText += wrapWithTag(currentParagraph, "p");
		}
	};

	for (const line of lines) {
		if (isHeading(line) || isList(line)) {
			pushCurrent();
			newText += line;
			continue;
		}

		if (line.startsWith(" ")) {
			pushCurrent();
			newText += line;
			continue;
		}

		currentParagraph += line;
	}

	pushCurrent();

	return newText;
}

function parseLists(text) {
	const lines = text.split("\n");

	let newText = "";
	let currentList = [];

	const pushCurrent = () => {
		if (currentList.length > 0) {
			newText += `${wrapWithTag(
				currentList.map((l) => wrapWithTag(l, "li")).join(""),
				"ul",
			)}\n`;
			currentList = [];
		}
	};

	for (const line of lines) {
		console.log(line);
		if (line.startsWith("*")) {
			currentList.push(line.slice(1).trimStart());
			continue;
		}

		pushCurrent();
		newText += line;
	}

	pushCurrent();

	return newText;
}

export function parse(text) {
	const lines = text.split("\n");
	let result = "";

	for (const line of lines) {
		const parsed = parseLine(line);

		result += parsed;
	}

	return parseParagraphs(parseLists(result));
}
