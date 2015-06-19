module Api
  class  NotesController < ApiController
    def create
      @note = current_user.notes.new(note_params)
      if @note.save
        render json: @note
      else
        render json: @note.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @note = current_user.notes.includes(:notebook).find(params[:id])
      render :show
    end

    def update
      @note = current_user.notes.find(params[:id])
      if @note.update(note_params)
        render json: @note
      else
        render json: @note.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
    end

    def index
      if params[:search]

      else
        @notes = current_user.notes.includes(:notebook) # for n + 1 query
        render :index
      end
    end

    private

    def note_params
      params.require(:note).permit(:title, :body, :notebook_id)
    end
  end
end
