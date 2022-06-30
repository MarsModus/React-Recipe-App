import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './Recipe.css';

function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="recipe-results">
      <h1>{title}</h1>
      <div className="image-container">
      
        <img src={image} alt="food" />
      </div>
      <h3>Calories: {calories}</h3>
      <div className="instructions">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <span className="ingredients">Ingredients</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {ingredients.map((ingredient) => (
                <li key={ingredient.text}>{ingredient.text}</li>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Recipe;
