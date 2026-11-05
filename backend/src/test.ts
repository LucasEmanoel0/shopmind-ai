
import checkSocketCompatibility from "./services/CompatibilityService.js";



checkSocketCompatibility(1, 3).then(console.log);
checkSocketCompatibility(999, 2)
  .then(console.log)
  .catch(console.error);
