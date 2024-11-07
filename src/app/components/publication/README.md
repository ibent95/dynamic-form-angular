<p>
  <h3>This is the `Publication` feature to implement Dynamic Forms.</h3>
  The form is structured as shown below.
</p>

![Publications Form Structure - White drawio](https://github.com/ibent95/dynamic-form-angular/assets/24244569/44e05356-c13d-47d9-9368-ebd10b53b94f)

<p>
  There are 5 parts of components to organize Dynamic Forms:
  <ol>
    <li>Main Component: the main part is to configure global settings and decide which one of the grid systems to use (No grid system, Bootstrap, or Tailwind).</li>
    <li>Grid System Component: each grid system is defined based on their best practice and then wraps the recursive part of Dynamic Forms.</li>
    <li>Recursive Component: the recursive component is part of the mechanism to reduce redundancies of code when defining the type of fields.</li>
    <li>Fields Component: all types of fields are defined and configured according to each character of fields, so the fields are prepared and will be used whenever the form is needed.</li>
    <li>Field Children Component: this is an optional component. When a field has many variants, it is better to use new component children and call the required child components using `[mode]` directive.</li>
  </ol>
</p>

<p>
  Also, all parts of the components used a single Angular Form (FormBuilder, FormControl, FormGroup, FormArray, ...). It will structured when the metadata of the form is fetched from the Backend (since v0.1.0).
</p>



<p>
  /// More information of the 5 parts of component will be added soon.
</p>
