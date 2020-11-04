import React from "react";
import {
    Crad,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core";

const NewsCard = ({
    articles: { description, publishedAt, source, title, url, urlToImage },
    i,
}) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={
                        urlToImage ||
                        "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
                    }
                    title={title}
                />
                <div>
                    <Typography
                        varient="body2"
                        color="textSecondary"
                        component="h2"
                    />

                    <Typography
                        varient="body2"
                        color="textSecondary"
                        component="h2"
                    />
                </div>
                <Typography gutterBottom varient="h5" />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" />
                <Typography varient="h5" color="textSecondary" />
            </CardActions>
        </Card>
    );
};

export default NewsCard;
