import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * @import Services
 */
import {
	TimeService,
	UrlQueryService
} from '@master-class/services';

/**
 * @requires react-dnd 
 */
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult,
	ResponderProvided,
	DragStart,
	DragUpdate,
	resetServerContext,
	DragProps,
	DragHandleProps,
} from 'react-beautiful-dnd';

/**
*
* @import Redux
*
**/
import {
	/* States */
	IStore,

	/* Actions */
	selectStep,
	setIdsInProgress
} from '@master-class/redux';

/**
*
* @import Models
*
**/
import {
	IPlaybookCategoryStore,
	IPlaybookStepStore
} from '@master-class/models';


/**
*
* @import Styles
*
**/
import './course-menu-step.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faChevronDown, faStream, faClock } from '@fortawesome/free-solid-svg-icons';

/**
 * @props
 */
type TProperty = {
	projectId: string,
	categoryId: string,
	sceneId: string,
	categoryOrder: number,
	sceneOrder: number,
	stepOrder: number,
	stepData: IPlaybookStepStore,
	stepIdInProgress?: string,
	setIdsInProgress: (categoryId: string, sceneId: string, stepId: string) => void,
	selectStep: (projectId: string, rawData: { step: IPlaybookStepStore }, idsToSet: { categoryId: string, sceneId: string, stepId: string }) => void,
	categories: IPlaybookCategoryStore[],
	routeHistory: any;

	icon?: 'basecamp' | 'sketch' | 'chrome' | 'vs-code' | 'vs-test' | 'textfile' | 'folder' | 'trello';

	/**
	 * @namespace editmode
	 */
	isEditMode: boolean;
	updateStepTitle: (title: string) => void;

	/**
	 * @namespace draggable
	 */
	dragRef?: any;
	dragProps?: DragProps;
	dragHandleProps?: DragHandleProps;
	dragStyles?: React.CSSProperties;
	isDragging?: boolean;
}

/**
 * @state 
 */
type TState = {
	id: string
}

/**
 * Sidebar step sub menu item 
 *
 * @class CourseMenuStep
 * @extends {React.Component<TProperty, TState>}
 */
class CourseMenuStep extends React.Component<TProperty, TState> {

	private selectStep = (ev: any) => {
		ev.stopPropagation();

		if (!this.props.isEditMode && this.props.routeHistory.push) {
			UrlQueryService.setSelectStepQueryString(this.props.categories, this.props.routeHistory, this.props.categoryId, this.props.sceneId, this.state.id);
		}
	}

	render() {

		let classNameList = ["course-menu-step"];

		/**
		* @step 1
		* @desc edit mode
		* @author Mitchy 
		*/
		if (this.props.isEditMode) {
			classNameList.push('isEditMode');
		}
		/**
		* @step 2
		* @desc is step in progress 
		* @author Mitchy 
		*/
		else if (this.props.stepIdInProgress && this.props.stepIdInProgress == this.state.id) {
			classNameList.push('isSelected');
		}


		const dataIcon = this.props.icon || 'folder';

		return (
			<section
				className={classNameList.join(' ')}
				onClick={this.selectStep}
				ref={this.props.dragRef}
				style={this.props.dragStyles}
				{...this.props.dragProps}
			>
				<div className="header">
					<div
						className="status"
						{...this.props.dragHandleProps}
					>
						{/* <p className="number">
							{this.props.categoryOrder}.{this.props.sceneOrder}.{this.props.stepOrder}
						</p> */}

						{
							this.props.isEditMode ? <FontAwesomeIcon icon={faArrowsAlt} /> : <span className="icon" data-icon={dataIcon}></span>
						}
					</div>
					<div className="label">
						{
							this.props.isEditMode ?
								<input
									className='txtUpdateStep'
									type='text'
									onFocus={e => e.target.select()}
									onChange={this.onTitleChange}
									defaultValue={this.props.stepData.title}
								/> :
								this.props.stepData.title
						}
					</div>
					<div className="time">
						{
							this.props.isEditMode ?
								<FontAwesomeIcon icon={faClock} /> :
								TimeService.formatTime(this.props.stepData.duration)
						}
					</div>
				</div>
			</section>
		)
	}

	componentWillMount() {
		this.setState({
			id: this.props.stepData.id
		})
	}

	onTitleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		this.props.updateStepTitle(evt.target.value);
	}
}

const mapStateToProps = (state: IStore) => {
	return {
		stepIdInProgress: state.playbookJson.idsInProgress.stepId,
		isEditMode: state.fileStorage.showBlueprint
	}
}

const dispatchActions = (dispatch: any, componentProps: any) => {
	return {
		setIdsInProgress: (categoryId: string, sceneId: string, stepId: string) => {
			dispatch(setIdsInProgress({
				categoryId: categoryId,
				sceneId: sceneId,
				stepId: stepId
			}))
		},
		updateSceneTitle: (title: string) => {
			console.log('title=' + title);
		},
		...bindActionCreators({
			selectStep: selectStep
		}, dispatch)
	}
}

export default connect(mapStateToProps, dispatchActions)(CourseMenuStep);
