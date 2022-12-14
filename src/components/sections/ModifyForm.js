import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const ModifyForm = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => { 

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="form-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            <form method="post" action="http://localhost:8080/CarnetContacts/ModifyContactServlet">
            <table>
            <th><h2>Voici un premier exemple de composant web avec un servlet</h2></th>
				<tr>
					<td><i>id: <input type="text" name="id" size="25"/></i></td>
				</tr>
				<tr>
					<td><i>first name: <input type="text" name="fname" size="25"/></i></td>
				</tr>
				<tr>
					<td><i>last name: <input type="text" name="lname" size="25"/></i></td>
				</tr>
				<tr>
					<td><i>email: <input type="text" name="email" size="25"/></i></td>
				</tr>
				
				<tr>
					<td><input class="button" type="submit" value="Submit" /><input class="button" type="reset" value="Reset"/></td>
				</tr>
		</table>
    </form>
            </h1>
            </div>
        </div>
      </div>
    </section>
  );
}

ModifyForm.propTypes = propTypes;
ModifyForm.defaultProps = defaultProps;

export default ModifyForm;