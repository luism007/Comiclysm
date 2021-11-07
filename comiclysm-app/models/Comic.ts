export class Comic { 
    id: number;
    name: string;
    writer: string;
    artist: string;
    publicationDate: string;
    coverImg: string;

    constructor(
        id: number,
        name: string,
        writer: string,
        artist: string,
        publicationDate: string,
        coverImg: string
        ) {

        this.id = id;
        this.name = name;
        this.writer = writer;
        this.artist = artist;
        this.publicationDate = publicationDate;
        this.coverImg = coverImg;
    }
}