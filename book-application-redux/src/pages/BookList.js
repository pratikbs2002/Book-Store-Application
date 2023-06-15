import "./Categories.css";
import React from "react";
import BookListCard from "../components/ui/BookListCard";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

export default function BookList() {
  const navigate = useNavigate();
  const { category } = useParams();

  const books = [
    {
      id: 1,
      productId: 1,
      bookName: "The Element",
      author: "Ken Robinson",
      price: 1000,
      category: "education",
      imageSrc:
        "https://m.media-amazon.com/images/I/71X3K99ZL3L._AC_UF1000,1000_QL80_.jpg",
      description:
        "The Element: How Finding Your Passion Changes Everything is a book by Ken Robinson that explores the concept of finding one's passion and how it can transform our lives. With inspiring stories and practical advice, Robinson encourages readers to discover their unique talents and interests to live a more fulfilling and meaningful life.",
    },
    {
      id: 2,
      productId: 2,
      bookName: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      price: 1200,
      category: "education",
      imageSrc:
        "https://m.media-amazon.com/images/I/71tplujXG+L._AC_UF1000,1000_QL80_.jpg",
      description:
        "Mindset: The New Psychology of Success by Carol S. Dweck delves into the power of mindset and its impact on our achievements and personal growth. Dweck introduces the concept of fixed and growth mindsets, highlighting how a growth mindset can lead to resilience, learning, and the ability to overcome challenges. Through research and real-life examples, the book offers practical strategies to develop a growth mindset and unlock our full potential.",
    },
    {
      id: 3,
      productId: 3,
      bookName: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      price: 1500,
      category: "history",
      imageSrc: "https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg",
      description:
        "Sapiens: A Brief History of Humankind by Yuval Noah Harari takes readers on a captivating journey through the history of Homo sapiens. From our evolutionary origins to the development of agriculture, empires, and modern societies, Harari explores key milestones that have shaped our species. Combining anthropology, history, and science, this book offers thought-provoking insights into the past and raises important questions about our future.",
    },
    {
      id: 4,
      productId: 4,
      bookName: "The Alchemist",
      author: "Paulo Coelho",
      price: 800,
      category: "fiction",
      imageSrc:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
      description:
        "The Alchemist by Paulo Coelho is a renowned novel that follows the journey of a young shepherd named Santiago as he searches for his personal legend. Filled with symbolism and spiritual wisdom, the book explores themes of destiny, self-discovery, and the pursuit of dreams. It has inspired millions of readers around the world to reflect on their own life paths and pursue their aspirations.",
    },
    {
      id: 5,
      productId: 5,
      bookName: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 900,
      category: "fiction",
      imageSrc:
        "https://rukminim1.flixcart.com/image/850/1000/xif0q/book/q/m/n/to-kill-a-mockingbird-original-imagjyhhtbh3xsmx.jpeg?q=90",
      description:
        "To Kill a Mockingbird by Harper Lee is a classic novel set in the fictional town of Maycomb, Alabama during the 1930s. Through the eyes of Scout Finch, the story explores themes of racial injustice, morality, and the loss of innocence. It is a powerful narrative that continues to resonate with readers, addressing important social issues and promoting empathy and understanding.",
    },
    {
      id: 6,
      productId: 6,
      bookName: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 950,
      category: "fiction",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
      description:
        "The Great Gatsby by F. Scott Fitzgerald is a renowned novel set in the 1920s during the Jazz Age. Through the eyes of narrator Nick Carraway, the story delves into the lives of wealthy socialites and the pursuit of the American Dream. With themes of love, wealth, and the illusion of happiness, the book offers a critique of the Roaring Twenties and the underlying emptiness of materialism.",
    },
    {
      id: 7,
      productId: 7,
      bookName: "1984",
      author: "George Orwell",
      price: 1100,
      category: "fiction",
      imageSrc:
        "https://m.media-amazon.com/images/I/514CVwOrybL._AC_UF1000,1000_QL80_.jpg",
      description:
        "1984 by George Orwell is a dystopian novel set in a totalitarian society ruled by Big Brother. The story follows protagonist Winston Smith as he rebels against the oppressive regime and questions the manipulation of truth and individual freedom. With its powerful portrayal of surveillance, censorship, and psychological control, 1984 remains a thought-provoking warning about the potential dangers of authoritarianism.",
    },
    {
      id: 8,
      productId: 8,
      bookName: "Pride and Prejudice",
      author: "Jane Austen",
      price: 850,
      category: "fiction",
      imageSrc:
        "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
      description:
        "Pride and Prejudice by Jane Austen is a beloved classic that follows the story of Elizabeth Bennet and her tumultuous relationship with the proud Mr. Darcy. Set in early 19th-century England, the novel explores themes of love, social class, and the expectations placed on women in society. Austen's wit and sharp social commentary continue to captivate readers to this day.",
    },
    {
      id: 9,
      productId: 9,
      bookName: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: 950,
      category: "fantasy",
      imageSrc:
        "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
      description:
        "The Hobbit by J.R.R. Tolkien is an enchanting adventure that precedes the events of The Lord of the Rings. Follow Bilbo Baggins as he embarks on a quest to reclaim the Lonely Mountain from the fearsome dragon Smaug. With magical creatures, epic battles, and a tale of bravery and friendship, this timeless fantasy novel has captured the imaginations of readers worldwide.",
    },
    {
      id: 10,
      productId: 10,
      bookName: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: 900,
      category: "fiction",
      imageSrc: "https://m.media-amazon.com/images/I/91HPG31dTwL.jpg",
      description:
        "The Catcher in the Rye by J.D. Salinger is a coming-of-age novel that follows the rebellious teenager Holden Caulfield as he navigates the complexities of adolescence and society. With themes of alienation, identity, and the loss of innocence, Salinger's iconic work continues to resonate with readers of all generations, sparking discussions about teenage angst and the search for authenticity.",
    },
    {
      id: 11,
      productId: 11,
      bookName: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      price: 1800,
      category: "fantasy",
      imageSrc:
        "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
      description:
        "The Lord of the Rings by J.R.R. Tolkien is an epic high-fantasy trilogy that follows the journey of Frodo Baggins to destroy the One Ring and defeat the Dark Lord Sauron. Set in the richly imagined world of Middle-earth, the books explore themes of heroism, sacrifice, and the struggle between good and evil. Tolkien's masterful storytelling has made these books a cornerstone of fantasy literature.",
    },
    {
      id: 12,
      productId: 12,
      bookName: "The Da Vinci Code",
      author: "Dan Brown",
      price: 1050,
      category: "thriller",
      imageSrc:
        "https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg",
      description:
        "The Da Vinci Code by Dan Brown is a gripping thriller that combines art, history, and mystery. Professor Robert Langdon becomes entangled in a quest to uncover a hidden secret that could shake the foundations of Christianity. As Langdon follows a trail of clues, he encounters danger and deception at every turn. Packed with suspense and cryptic puzzles, this bestseller keeps readers on the edge of their seats.",
    },
    {
      id: 13,
      productId: 13,
      bookName: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      price: 950,
      category: "fantasy",
      imageSrc: "https://m.media-amazon.com/images/I/5165He67NEL.jpg",
      description:
        "Harry Potter and the Philosopher's Stone is the first book in the beloved Harry Potter series by J.K. Rowling. It introduces readers to the magical world of Hogwarts School of Witchcraft and Wizardry and follows young Harry Potter as he discovers his true identity as a wizard. With themes of friendship, courage, and the battle between good and evil, this enchanting tale has captivated millions of readers worldwide.",
    },
    {
      id: 14,
      productId: 14,
      bookName:
        "The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe",
      author: "C.S. Lewis",
      price: 900,
      category: "fantasy",
      description:
        "The Lion, the Witch, and the Wardrobe is the first book in The Chronicles of Narnia series by C.S. Lewis. It tells the story of four siblings who stumble into the magical land of Narnia through a wardrobe and become embroiled in a battle between good and evil. With Christian allegory and themes of bravery, loyalty, and redemption, this timeless series has captured the hearts of readers of all ages.",
    },
    {
      id: 15,
      productId: 15,
      bookName: "The Girl on the Train",
      author: "Paula Hawkins",
      price: 1000,
      category: "thriller",
      description:
        "The Girl on the Train by Paula Hawkins is a psychological thriller that follows Rachel Watson, an alcoholic woman who becomes entangled in a missing person investigation. As Rachel delves deeper into the mystery, she uncovers dark secrets and questions her own memories. With its twists and turns, this gripping novel keeps readers guessing until the final pages.",
    },
    {
      id: 16,
      productId: 16,
      bookName: "Brave New World",
      author: "Aldous Huxley",
      price: 1100,
      category: "fiction",
      description:
        "Brave New World by Aldous Huxley is a dystopian novel set in a futuristic society where humans are genetically engineered and controlled by drugs and technology. Through the eyes of protagonist Bernard Marx, the story explores themes of conformity, individuality, and the cost of utopia. Huxley's thought-provoking work continues to raise important questions about the nature of freedom and the role of science in society.",
    },
    {
      id: 17,
      productId: 17,
      bookName: "The Kite Runner",
      author: "Khaled Hosseini",
      price: 950,
      category: "fiction",
      description:
        "The Kite Runner by Khaled Hosseini is a powerful story of friendship, redemption, and the impact of choices. Set against the backdrop of Afghanistan's tumultuous history, the novel follows Amir and his journey to confront his past mistakes and find forgiveness. With its emotional depth and vivid portrayal of Afghan culture, this book has touched the hearts of readers around the world.",
    },
    {
      id: 18,
      productId: 18,
      bookName: "The Hunger Games",
      author: "Suzanne Collins",
      price: 1050,
      category: "science fiction",
      description:
        "The Hunger Games is the first book in the popular dystopian trilogy by Suzanne Collins. Set in a post-apocalyptic world, it follows Katniss Everdeen as she volunteers for a brutal televised competition where teenagers fight to the death. With themes of survival, rebellion, and the corrupting influence of power, this gripping series has captivated readers of all ages.",
    },
    {
      id: 19,
      productId: 19,
      bookName: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      price: 900,
      category: "fiction",
      description:
        "The Picture of Dorian Gray by Oscar Wilde is a novel that explores the pursuit of pleasure and the consequences of vanity and moral corruption. As Dorian Gray remains eternally young while a portrait of him ages and reflects his sins, Wilde delves into the dark side of human nature and the price of eternal youth. This philosophical work has become a classic of Victorian literature.",
    },
    {
      id: 20,
      productId: 20,
      bookName: "The Road",
      author: "Cormac McCarthy",
      price: 950,
      category: "fiction",
      description:
        "The Road by Cormac McCarthy is a post-apocalyptic novel that follows a father and son as they journey across a desolate and dangerous landscape. Amidst the remnants of civilization, they face the harsh realities of survival and grapple with questions of morality and hope. With its stark prose and poignant exploration of humanity, this book offers a haunting vision of a world stripped of humanity.",
    },
    {
      id: 21,
      productId: 21,
      bookName: "The Book Thief",
      author: "Markus Zusak",
      price: 1100,
      category: "historical fiction",
      description:
        "The Book Thief by Markus Zusak is a poignant story set in Nazi Germany, narrated by Death. It follows Liesel Meminger, a young girl who finds solace and courage in books during the horrors of World War II. With themes of love, resilience, and the power of words, this novel has captured the hearts of readers worldwide.",
    },
    {
      id: 22,
      productId: 22,
      bookName: "The Fault in Our Stars",
      author: "John Green",
      price: 1000,
      category: "young adult",
      description:
        "The Fault in Our Stars by John Green tells the heart-wrenching story of Hazel Grace Lancaster, a teenage girl with cancer who falls in love with Augustus Waters, another cancer patient. Through their journey of love and loss, Green explores themes of mortality, friendship, and the search for meaning. This emotional rollercoaster has touched the lives of many readers.",
    },
    {
      id: 23,
      productId: 23,
      bookName: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: 950,
      category: "fiction",
      description:
        "The Catcher in the Rye by J.D. Salinger is a coming-of-age novel that follows the rebellious teenager Holden Caulfield as he navigates the complexities of adolescence and society. With themes of alienation, identity, and the loss of innocence, Salinger's iconic work continues to resonate with readers of all generations, sparking discussions about teenage angst and the search for authenticity.",
    },
    {
      id: 24,
      productId: 24,
      bookName: "Gone Girl",
      author: "Gillian Flynn",
      price: 1050,
      category: "thriller",
      description:
        "Gone Girl by Gillian Flynn is a gripping psychological thriller that explores the dark and twisted dynamics of a marriage. When Amy Dunne goes missing on her fifth wedding anniversary, her husband Nick becomes the prime suspect. As the truth unravels, the story takes unexpected twists and challenges readers' perceptions of love, truth, and trust.",
    },
    {
      id: 25,
      productId: 25,
      bookName: "The Color Purple",
      author: "Alice Walker",
      price: 950,
      category: "fiction",
      description:
        "The Color Purple by Alice Walker is a powerful novel that follows the life of Celie, an African-American woman in the early 20th century. Through her letters, Celie shares her experiences of abuse, resilience, and the transformative power of love and sisterhood. Walker's masterpiece addresses issues of race, gender, and identity, leaving a lasting impact on readers.",
    },
    {
      id: 26,
      productId: 26,
      bookName: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: 1000,
      category: "fantasy",
      description:
        "The Hobbit by J.R.R. Tolkien is an enchanting adventure that precedes the events of The Lord of the Rings. Follow Bilbo Baggins as he embarks on a quest to reclaim the Lonely Mountain from the fearsome dragon Smaug. With magical creatures, epic battles, and a tale of bravery and friendship, this timeless fantasy novel has captured the imaginations of readers worldwide.",
    },
    {
      id: 27,
      productId: 27,
      bookName: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 900,
      category: "fiction",
      description:
        "To Kill a Mockingbird by Harper Lee is a classic novel that explores racial injustice and the loss of innocence. Set in the 1930s, the story is told through the eyes of Scout Finch as she witnesses her father, Atticus, defending a black man wrongly accused of rape. With its powerful themes and memorable characters, this book continues to be a staple of literature curriculum.",
    },
    {
      id: 28,
      productId: 28,
      bookName: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 950,
      category: "fiction",
      description:
        "The Great Gatsby by F. Scott Fitzgerald is a quintessential American novel that explores the decadence and disillusionment of the Jazz Age. Through the eyes of narrator Nick Carraway, the story follows the enigmatic millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan. It delves into the corrupting power of wealth and the pursuit of the American Dream.",
    },
    {
      id: 29,
      productId: 29,
      bookName: "The Alchemist",
      author: "Paulo Coelho",
      price: 950,
      category: "fiction",
      description:
        "The Alchemist by Paulo Coelho is a philosophical novel that follows the journey of a young Andalusian shepherd named Santiago as he searches for his personal legend. Along the way, Santiago encounters various characters and learns valuable lessons about destiny, purpose, and the importance of following one's dreams. This inspirational book has resonated with readers worldwide.",
    },
    {
      id: 30,
      productId: 30,
      bookName: "The Odyssey",
      author: "Homer",
      price: 1000,
      category: "classic",
      description:
        "The Odyssey is an ancient Greek epic poem attributed to Homer. It tells the story of Odysseus, the Greek hero, as he embarks on a perilous journey home after the Trojan War. Filled with mythical creatures, gods, and heroic adventures, this epic tale explores themes of courage, perseverance, and the nature of heroism.",
    },
    {
      id: 31,
      productId: 31,
      bookName: "The Secret Life of Bees",
      author: "Sue Monk Kidd",
      price: 950,
      category: "fiction",
      description:
        "The Secret Life of Bees by Sue Monk Kidd is a heartfelt novel set in the 1960s American South. It follows the story of fourteen-year-old Lily Owens, who escapes her troubled home and finds solace in the company of beekeeping sisters. Through themes of race, female empowerment, and the healing power of love, this book offers a compelling exploration of identity and belonging.",
    },
    {
      id: 32,
      productId: 32,
      bookName: "A Game of Thrones",
      author: "George R.R. Martin",
      price: 1100,
      category: "fantasy",
      description:
        "A Game of Thrones is the first book in the epic fantasy series A Song of Ice and Fire by George R.R. Martin. It introduces readers to the intricate and brutal world of Westeros, where noble families vie for power and survival. With its complex characters, political intrigue, and unpredictable plot twists, this series has become a cultural phenomenon.",
    },
    {
      id: 33,
      productId: 33,
      bookName: "1984",
      author: "George Orwell",
      price: 950,
      category: "science fiction",
      description:
        "1984 by George Orwell is a dystopian novel that depicts a totalitarian society where individualism and independent thought are suppressed. The story follows Winston Smith as he rebels against the oppressive regime and seeks freedom. With its chilling portrayal of surveillance, propaganda, and the dangers of authoritarianism, this book remains a chilling cautionary tale.",
    },
    {
      id: 34,
      productId: 34,
      bookName: "Pride and Prejudice",
      author: "Jane Austen",
      price: 900,
      category: "classic",
      description:
        "Pride and Prejudice by Jane Austen is a timeless romance novel set in 19th-century England. It revolves around the spirited Elizabeth Bennet and her complicated relationship with the proud Mr. Darcy. Through wit, social commentary, and memorable characters, Austen explores themes of love, marriage, and societal expectations.",
    },
    {
      id: 35,
      productId: 35,
      bookName: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      price: 1200,
      category: "fantasy",
      description:
        "The Lord of the Rings is an epic high fantasy trilogy by J.R.R. Tolkien. Set in the fictional world of Middle-earth, the story follows a diverse group of characters as they embark on a quest to destroy the powerful One Ring and defeat the Dark Lord Sauron. With its rich mythology, detailed world-building, and themes of heroism and sacrifice, this masterpiece has captivated generations of readers.",
    },
    {
      id: 36,
      productId: 36,
      bookName: "The Book of Lost Things",
      author: "John Connolly",
      price: 950,
      category: "fantasy",
      description:
        "The Book of Lost Things by John Connolly is a dark fantasy novel that combines fairy tales, folklore, and coming-of-age themes. Set during World War II, it follows twelve-year-old David as he enters a magical realm filled with twisted versions of classic fairy tales. As David confronts his fears and navigates the dangers of this otherworldly land, he discovers the power of stories and the importance of facing the monsters within.",
    },
    {
      id: 37,
      productId: 37,
      bookName: "The Martian",
      author: "Andy Weir",
      price: 1000,
      category: "science fiction",
      description:
        "The Martian by Andy Weir is a gripping science fiction novel that tells the story of astronaut Mark Watney, who is stranded alone on Mars after a mission gone wrong. With limited supplies and ingenuity as his only tools, Watney must find a way to survive and signal for rescue. This thrilling and scientifically accurate tale of survival has captivated readers and was adapted into a successful film.",
    },
    {
      id: 38,
      productId: 38,
      bookName: "The Handmaid's Tale",
      author: "Margaret Atwood",
      price: 950,
      category: "dystopian",
      description:
        "The Handmaid's Tale by Margaret Atwood is a dystopian novel set in a totalitarian society where women are subjugated and used for reproductive purposes. Through the eyes of Offred, a Handmaid, the story explores themes of gender oppression, autonomy, and resistance. Atwood's haunting and thought-provoking work has become a seminal feminist text.",
    },
    {
      id: 39,
      productId: 39,
      bookName: "Brave New World",
      author: "Aldous Huxley",
      price: 950,
      category: "science fiction",
      description:
        "Brave New World by Aldous Huxley is a dystopian novel that envisions a future society where humans are genetically engineered and conditioned for a rigid social order. Through the eyes of Bernard Marx, the story examines themes of conformity, individualism, and the loss of humanity. Huxley's cautionary tale continues to provoke discussions about the ethical implications of scientific advancements.",
    },
    {
      id: 40,
      productId: 40,
      bookName: "The Kite Runner",
      author: "Khaled Hosseini",
      price: 1050,
      category: "fiction",
      description:
        "The Kite Runner by Khaled Hosseini is a powerful and emotional novel that explores friendship, betrayal, and redemption. Set against the backdrop of Afghanistan's tumultuous history, the story follows Amir, a young boy from Kabul, and his journey to make amends for past mistakes. Hosseini's storytelling and vivid portrayal of characters have made this book a beloved international bestseller.",
    },
  ];

  const filteredBooks =
    category === "all"
      ? books
      : books.filter((book) => book.category === category);
  console.log(category);
  console.log(filteredBooks);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
        paddingBottom: "200px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          width: "100%",
          color: "black",
        }}
      >
        Category : {category} ({filteredBooks.length} Book
        {filteredBooks.length === 1 ? `` : `s`})
      </h2>
      <div
        style={{
          cursor: "pointer",
          fontSize: "30px",
          width: "100%",
          paddingLeft: "200px",
        }}
        onClick={() => navigate(`/categories`)}
      >
        <BsArrowLeftCircleFill />
      </div>
      <div className="card-container2">
        {filteredBooks.map((card, index) => (
          <BookListCard
            key={index}
            productId={card.productId}
            title={card.bookName}
            price={card.price}
            imageSrc={
              card.imageSrc
                ? card.imageSrc
                : "https://w0.peakpx.com/wallpaper/310/869/HD-wallpaper-black-screen-space-thumbnail.jpg"
            }
            author={card.author}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
