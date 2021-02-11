describe("Video elements creation logic", () => {
    beforeAll(() => {
        document.body.innerHTML = ` <header class="main-header">
        <div class="search-container">
            <input id="search-input" label="Search" type="text" placeholder="Search"><button id="search-button">
                <em class="fa fa-search"></em>
            </button>
        </div>
    </header>
    <section class="thumbnail-slider-container">
        <ul class="thumbnail-slider">
          
        </ul>
    </section>
    <template id="list-item">
    <li>
        <article class="video-container">
            <a>
                <img src="https://i.ytimg.com/vi/4K7F5WjbEZ0/hqdefault.jpg" alt="thumbnail">
            </a>
            <h1 class="title">
                Title
            </h1>
            <p class="description">
                Description
            </p>
            <p class="author">
                Author
            </p>
            <p class="published-date">
                Date
            </p>
            <p class="count-of-views">
                viewCount
            </p>
        </article>
    </li>
</template>
    <section class="pagination">

        <ul class="pagination-container">

        </ul>

    </section>`;
    })
    it("should create video  elements", () => {
        const result = [
            {
                thumbnail: "https://i.ytimg.com/vi/4K7F5WjbEZ0/default.jpg",
                title: "isko kehte hai SUPER event !! JS Films Calendar Launch 2021",
                description:
                    "GET YOUR 2021 COPY TODAY: https://bit.ly/3qNTU6F Part 1: https://www.youtube.com/watch?v=q-CF50hXV4E Get my favorite Mivi Products: Collar Bluetooth ...",
                author: "JS Films",
                publishTime:
                    new Date(`2021-01-28T07:30:00`).toDateString() +
                    " " +
                    new Date(`2021-01-28T07:30:00`).toLocaleTimeString(),
                views: `2324212 views`,
                videoId: `4K7F5WjbEZ0`,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/q-CF50hXV4E/default.jpg",
                title: "Lamborghini Huracan V/S Ninja H2 + Hayabusa !",
                description:
                    "GET YOUR 2021 COPY TODAY: https://bit.ly/3qNTU6F Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats ...",
                author: "JS Films",
                publishTime:
                    new Date(`2021-01-26T07:30:01`).toDateString() +
                    " " +
                    new Date(`2021-01-26T07:30:01`).toLocaleTimeString(),
                views: `5788544 views`,
                videoId: `q-CF50hXV4E`,
            },
        ];
        const fragment = addVideoElements(1920, result, 5);
        expect(fragment.children.length).toBe(2);
    });
});
