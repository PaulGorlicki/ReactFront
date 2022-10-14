import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Connexion = ({
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
            <form method="post" action="LoginServlet">
		<table>
			<tr>
				<th><h2>Voici un premier exemple de composant web avec un servlet</h2></th>
				<tr>
					<td><i>Name: <input type="text" name="name" size="25"/></i></td>
				</tr>
				<tr>
					<td><i>Password: <input type="password" name="password" size="25"/></i></td>
				</tr>
				<tr>
					<td>                        <Link to="Home" class="button" relative="path">Sign up</Link>
<input class="button" type="reset" value="Reset"/></td>
				</tr>
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

Connexion.propTypes = propTypes;
Connexion.defaultProps = defaultProps;

export default Connexion;